This repository is a placeholder for releases of a johnny five application runner.

Can currently be compiled using [noda-loader](https://github.com/bmeck/noda-loader) and the generate-single-binary script inside.

```sh
johnny-five my-robot-logic.noda
```

## Goals

1. support people to distribute single files (ala jar files) to run a johnny-five application
   a. create a workflow to have a single binary
2. allow people to create basic johnny-five application without the need for node/npm (and particularly node-gyp) being installed

## How?

1. We reuse the `noda-loader` logic to load archive files, and provide single binaries with this bootstrap logic built in.
2. We proxy the request for `johnny-five` to a pre-compiled installation inside of the binaries we distribute.

## TODO

How the heck do we want to manage updates?

They are split into runtime (node/iojs) updates and codebase (johnny-five) updates.
