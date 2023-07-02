# Scaffold Plug

The repo have a scaffold for deno plug, to make it easy to wrap rust native
libraries.

The source code is annoated with comments for the relevent parts.

## Usage

- develop using locally built rust library

```sh
deno task dev
```

- develop using remotly published rust library

```sh
deno task run
```

## Publishing a rust library with github action

The repo comes with a workflow that builds the rust library for
linux,windows,macos(x86+arm)

To use it go to `Actions`, then click `Releas libs` (on the left), then click
`Run workflow`. Set the tag name, the tag should match what you're using inside
`src/mod.ts` so it can be picked up by the module.

Thats it now when you use `deno task run` it should use this published library.
