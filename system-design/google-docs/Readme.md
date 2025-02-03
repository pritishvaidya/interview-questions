# Google Docs

### Notion

### Google Docs

### Etherpad

### Quip

## Requirements

### Functional

- Participants can edit / view the document
- Concurrent Updates and conflict resolution
- Offline Usage

### Non Functional

- Updates reflected in real time
- Support upto 100 concurrent editors

### Approach

#### Rendering and editing rich text

DOM with fake cursors - calculating the height and width of cursor positioning
contenteditable attribute - Add contenteditable to the DOM elements

#### Request Payload

Payload contains only the changes
Small payload size

#### Network Architecture

Client Server Model - Central server, all participants communicate to the main server
Database persistence, source of truth

#### Concurrency control Model

Local State
Remote State

Version detection Modal - Document state is replicated in each of the user's machine
and participants can make changes locally.

When server receives update requests, it checks whether the revision is same as current revision
If the revision match then it updates the revision and broadcasts its information to all the peers

Conflict resolution approaches
CRDTs - Conflict Free Replicated Data types
Pre defined algorithms, last writer wins approach automatically resolves updates

#### Collaborations

When to send updates ?
Local Buffer Queue - 200ms duration , when there are no pending requests
Can be stored in localstorage
Sent Buffer Queue - Updates sent to the server

#### Transport - Websockets

Low latency bidirectional

