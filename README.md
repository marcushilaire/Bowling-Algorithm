# Blowing Score Calculator

A lightweight node app used to calculate the final score for a game of bowling given a sequence of throws.

Input is accpeted in the forms seen in [input.txt](./data/input.txt).

For exapmple:

```
x-x-x-x-x-x-x-x-x-x-xx
5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5
09-18-27-36-45-54-63-72-81-90
09-18-27-36-45-54-63-72-81-7/-5
24-35-24-32-45-5/-34-23-45-23
7/-5/-6/-36-81-63-8/-53-27-9/-5
x-x-9/-43-53-72-x-72-72-5/-7
```

### Use

The program begins by using running `node logic.js` and accepts any number of string inputs as command line arguments. If no inputs are passed from the command line it calculates the list of scores in [input.txt](./data/input.txt).
