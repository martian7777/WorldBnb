# Rentora (WorldBnb) - Architecture & UML Diagrams

## How to Visualize These Diagrams

### 1. How to Visualize the Previous "Mermaid" Diagrams
The diagrams in the previous document were written in **Mermaid.js**.
*   **Native Support**: If you copy and paste the Markdown block (with ` ```mermaid `) into GitHub, Notion, or Obsidian, it will automatically render the diagram.
*   **Online Editor**: You can copy the code and paste it into the [Mermaid Live Editor](https://mermaid.live/) to view it and export it as a PNG or SVG.

### 2. How to Visualize "PlantUML" Diagrams
The diagrams below are written in **PlantUML**, which is an industry standard for academic and enterprise UML modeling.
*   **VS Code**: Install the **"PlantUML"** extension by *jebbs*. You can then press `Alt + D` (or `Option + D` on Mac) inside a `.puml` or `.md` file to preview the diagram right in your editor.
*   **Online Web Server**: Copy everything between `@startuml` and `@enduml` and paste it into [PlantText](https://www.planttext.com/) or the [Official PlantUML Server](https://www.plantuml.com/plantuml/uml/). It will generate an image you can download for your thesis.

---

Below is the PlantUML code for every diagram type you requested, custom-tailored for the Rentora architecture.

### 1. Use Case Diagram
This Use Case diagram outlines the primary interactions between the different actors (Guests, Hosts, and the external Stripe System) and the Rentora platform. It visualizes the core functional requirements of the application, demonstrating how Guests can search, filter, book, and review properties, while Hosts can create and manage their own listings. It also highlights the dependency of the booking process on the Stripe system for secure payment confirmation.

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor "Guest" as guest
actor "Host" as host
actor "Stripe System" as stripe

rectangle "Rentora Platform" {
  usecase "Search Listings" as UC1
  usecase "Filter by Category" as UC2
  usecase "Book a Property" as UC3
  usecase "Process Payment" as UC4
  usecase "Create Listing" as UC5
  usecase "Manage Own Properties" as UC6
  usecase "Leave a Review" as UC7
}

guest --> UC1
guest --> UC2
guest --> UC3
guest --> UC7

host --> UC5
host --> UC6
host --> UC1 : (Hosts can also be guests)

UC3 ..> UC4 : <<includes>>
stripe --> UC4 : Confirms Payment
@enduml
```

### 2. Class Diagram
This Class diagram represents the underlying domain model and database schema for Rentora, detailing the exact attributes and data types (such as MongoDB ObjectIds) for the User, Listing, and Reservation entities. It illustrates the cardinal relationships between these models, specifically showing how a single User can create multiple Listings (as a Host) or make multiple Reservations (as a Guest), and how a Listing can have multiple Reservations over time.

```plantuml
@startuml
skinparam classAttributeIconSize 0

class User {
  - id : String [ObjectId]
  - name : String
  - email : String
  - image : String
  - hashedPassword : String
  - favoriteIds : List<String>
  - createdAt : DateTime
  + getFavorites()
  + createListing()
  + makeReservation()
}

class Listing {
  - id : String [ObjectId]
  - title : String
  - description : String
  - imageSrc : String
  - category : String
  - roomCount : Int
  - bathroomCount : Int
  - guestCount : Int
  - locationValue : String
  - price : Int
  - userId : String [FK]
  - createdAt : DateTime
  + updateDetails()
  + checkAvailability(startDate, endDate)
}

class Reservation {
  - id : String [ObjectId]
  - userId : String [FK]
  - listingId : String [FK]
  - startDate : DateTime
  - endDate : DateTime
  - totalPrice : Int
  - createdAt : DateTime
  + confirmPayment()
  + cancelReservation()
}

User "1" *-- "*" Listing : "Creates/Hosts >"
User "1" *-- "*" Reservation : "Makes >"
Listing "1" *-- "*" Reservation : "Has >"

@enduml
```

### 3. Sequence Diagram
This Sequence diagram charts the chronological execution flow when a user decides to book a property on Rentora. It breaks down the process step-by-step across the Frontend UI, the Next.js Server Actions, the MongoDB database, and the external Stripe API. Most importantly, it visualizes the critical asynchronous webhook mechanism where the Next.js server waits for Stripe's secure background confirmation before permanently locking the reservation into the database.

```plantuml
@startuml
actor Guest
participant "Frontend (Next.js)" as UI
participant "Server Actions" as Server
participant "Stripe API" as Stripe
participant "Database (MongoDB)" as DB

Guest -> UI : Select Dates & Click "Reserve"
UI -> Server : requestCheckout(listingId, dates)
activate Server

Server -> DB : checkAvailability(listingId, dates)
activate DB
DB --> Server : Available (True)
deactivate DB

Server -> Stripe : createCheckoutSession(price, metadata)
activate Stripe
Stripe --> Server : Checkout Session URL
deactivate Stripe

Server --> UI : Redirect URL
deactivate Server
UI --> Guest : Redirects to Stripe Checkout

Guest -> Stripe : Enters Card Details & Pays
Stripe --> Guest : Redirect to /success

note over Server, Stripe: Asynchronous Webhook Flow
Stripe -> Server : POST /api/payments/webhook
activate Server
Server -> Server : Verify Signature
Server -> DB : createReservation(userId, listingId, dates)
activate DB
DB --> Server : Reservation Created
deactivate DB
Server --> Stripe : 200 OK
deactivate Server

@enduml
```

### 4. Object Diagram
This Object diagram captures a specific, concrete snapshot of the Rentora system at runtime, moving from abstract classes to real instances of data. It shows a scenario where a specific guest user ("John Doe") has successfully booked a specific listing ("Luxury Cliffside Villa") owned by a specific host ("Jane Smith") for a defined set of summer dates, explicitly mapping out the real-world IDs, prices, and relationships holding the system together in that moment.

```plantuml
@startuml

object "<u>guestUser: User</u>" as user1 {
  id = "64b1c2..."
  name = "John Doe"
  email = "john@example.com"
}

object "<u>hostUser: User</u>" as user2 {
  id = "64b9f8..."
  name = "Jane Smith"
  email = "jane@example.com"
}

object "<u>villaListing: Listing</u>" as listing1 {
  id = "77a2x9..."
  title = "Luxury Cliffside Villa"
  price = 320
  locationValue = "Santorini"
  userId = "64b9f8..."
}

object "<u>summerTrip: Reservation</u>" as res1 {
  id = "99z5p1..."
  startDate = "2026-07-10"
  endDate = "2026-07-15"
  totalPrice = 1600
  userId = "64b1c2..."
  listingId = "77a2x9..."
}

user2 *-- listing1 : hosts
user1 *-- res1 : booked
listing1 *-- res1 : has reservation

@enduml
```

### 5. Activity Diagram
This Activity diagram maps out the dynamic workflow and decision-making paths a user navigates when attempting to book a property. From the initial entry point, it traces the conditional logic of authentication, searching, and date availability checks. It details the branching paths that occur during the checkout phase, showing how the system handles both successful payment flows (resulting in a saved database reservation) and failed payments (where the user is redirected back).

```plantuml
@startuml
start

:User opens Rentora;
if (Is Logged In?) then (No)
  :Redirect to Clerk Login;
  :User authenticates;
else (Yes)
endif

:Enter Search Criteria (Location, Dates, Guests);
:View Filtered Listings;
:Select a Listing;

if (Dates Available?) then (Yes)
  :Click "Reserve";
  :Redirect to Stripe Checkout;
  
  if (Payment Successful?) then (Yes)
    :Stripe processes payment;
    :Webhook fires to Next.js Server;
    :Save Reservation to Database;
    :Redirect to Success Page;
  else (No)
    :Payment Failed;
    :Redirect back to Listing;
    stop
  endif

else (No)
  :Show "Dates Unavailable" Error;
  stop
endif

stop
@enduml
```

### 6. Component Diagram
This Component diagram provides a high-level structural view of the Rentora software architecture, dividing the application into its logical packages: the Client Application, the Next.js Backend, the Database, and Third-Party Services. It visually demonstrates the wiring and communication boundaries, such as how the React UI relies on Server Actions for data fetching, how the API Routes utilize the Prisma ORM to interact with MongoDB, and where external dependencies like Clerk, Stripe, and Cloudinary plug into the ecosystem.

```plantuml
@startuml
package "Rentora Client Application" {
  [React UI Components] as UI
  [Zustand State Management] as State
}

package "Next.js Backend" {
  [Server Actions (Data Fetching)] as Actions
  [API Routes (Webhooks)] as API
  [Prisma Client (ORM)] as ORM
}

database "MongoDB Atlas" {
  [Document Collections] as DB
}

cloud "Third-Party Services" {
  [Clerk Auth] as Clerk
  [Stripe] as Stripe
  [Cloudinary] as Cloudinary
}

UI --> Actions : "Calls Server Actions"
UI --> State : "Updates UI State"
UI --> Clerk : "OAuth / Sessions"
UI --> Cloudinary : "Direct Image Upload"

Actions --> ORM : "TypeScript Queries"
API --> ORM : "Writes Data"
API <.. Stripe : "Triggers Webhooks"
Actions --> Stripe : "Creates Sessions"

ORM --> DB : "Reads/Writes Documents"
@enduml
```

### 7. Deployment Diagram
This Deployment diagram illustrates the physical cloud infrastructure and execution environments required to host the Rentora application in production. It maps the software artifacts to their respective nodes, showing the React bundle running on the end-user's device, the Next.js server operating on Vercel's Platform-as-a-Service, the MongoDB collections residing in an Atlas cluster, and the secure HTTPS connections linking the backend to external infrastructure like Stripe and Cloudinary.

```plantuml
@startuml
node "Client Device" <<Mobile / Desktop>> {
  node "Web Browser" {
    artifact "React / Next.js Client Bundle"
  }
}

node "Vercel Cloud Infrastructure" <<PaaS>> {
  node "Next.js Server" {
    artifact "Server Actions"
    artifact "API Routes"
    artifact "Prisma Client"
  }
}

node "MongoDB Atlas Cloud" <<DBaaS>> {
  database "Primary Cluster" {
    artifact "Collections (Users, Listings, Reservations)"
  }
}

node "Stripe Infrastructure" <<Payment Gateway>> {
  artifact "Payment Processing Engine"
}

node "Cloudinary" <<CDN>> {
  artifact "Image Storage"
}

"Web Browser" -- "Next.js Server" : HTTPS
"Next.js Server" -- "Primary Cluster" : TCP/IP (Prisma Wire)
"Next.js Server" -- "Stripe Infrastructure" : HTTPS / API
"Next.js Server" -- "Cloudinary" : HTTPS
"Stripe Infrastructure" ..> "Next.js Server" : HTTPS Webhooks

@enduml
```

### 8. State Diagram
This State diagram models the lifecycle and transition states of a single Reservation entity from its inception to its conclusion. It tracks the status changes triggered by specific events—beginning as a "Pending" checkout session, moving to "Paid" via Stripe webhooks, locking as "Confirmed" in the database, becoming "Active" on the start date, and finally reaching "Completed" or "Cancelled" states, helping developers understand all possible statuses a booking can exist in.

```plantuml
@startuml

[*] --> Pending : User clicks Reserve
Pending : Stripe Checkout Session Created

Pending --> Paid : Payment Successful (Stripe Webhook)
Pending --> Cancelled : User Aborts Checkout

Paid --> Confirmed : Database saves Reservation
Confirmed : Dates locked in calendar

Confirmed --> Active : Start Date Arrives
Active : Guest is staying at property

Active --> Completed : End Date Passes
Completed : Guest checks out

Confirmed --> Cancelled : Guest or Host cancels

Cancelled --> [*]
Completed --> [*]

@enduml
```

### 9. Timing Diagram
This Timing diagram provides a time-centric visualization of the booking and payment lifecycle, specifically designed to highlight the latency and asynchronous nature of external API calls. By tracking the state changes across the Client, Server, Database, and Stripe over an arbitrary timeline, it clearly communicates why the UI must handle loading states during payment processing and demonstrates the delayed background execution of the Stripe webhook that finalizes the reservation.

```plantuml
@startuml
robust "Guest Client" as Client
robust "Next.js Server" as Server
robust "Stripe API" as Stripe
robust "MongoDB" as DB

@0
Client is Idle
Server is Idle
Stripe is Idle
DB is Idle

@1
Client is Requesting
Client -> Server : Click Reserve

@2
Server is Processing
Server -> DB : Check Availability

@3
DB is Querying
DB -> Server : Available

@4
Server -> Stripe : Create Checkout Session

@5
Stripe is Processing
Stripe -> Server : Return Session URL

@6
Server -> Client : Redirect User
Server is Idle
Client is Paying

@15
Client -> Stripe : Submits Credit Card

@17
Stripe is Processing

@20
Stripe -> Client : Payment Success (Redirect)
Client is Idle

@21
Stripe -> Server : Webhook (payment_intent.succeeded)
Server is Processing

@22
Server -> DB : Save Reservation
DB is Querying

@23
DB -> Server : Saved
Server -> Stripe : 200 OK Response
Server is Idle
DB is Idle
@enduml
```
