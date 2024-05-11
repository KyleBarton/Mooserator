
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
- Not clear what I can gitignore and what I can't. When I ignored .moose things seemed bad? But there are too many files to commit there.
  - Actually I'm in a bad state now, so will need to re-make the my-moose app before this can work.