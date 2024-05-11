
## Mooserator

A very basic example of utilizing [moose.js](https://www.moosejs.com/) with an existing website

### Stuff

**webapp**
A really basic frontend. In this example, literally just a button that says "click me". The javascript includes a function that can be assigned to "onclick" which will fire off to the local moose server.

**my-moose-app**
Just taken directly from the npx command "npx create-moose-app my-moose-app"

### What I needed ahead of time

- Docker
- Node/Npm (I had nvm)
- Npx

#### Notes

- `no-cors` needed on the fetch example, at least for local
- "timestamp" datetime wasn't obvious. I was busy trying to format Date when I should have literally sent the unix timestamp along. This might just be me.
- Not sure how auth will work?