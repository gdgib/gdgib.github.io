---
title: RePar
description: Reconfigurable parallel computing research, including programming languages and high level synthesis.
active: false
---

RePar was the unbrella project for my PhD research into High Level Synthesis.
As a compiler RePar could transform a computation kernel in optimized Verilog, C/C++, CUDA or Java code, including useable I/O mechanisms.
While the project was not completed to any usable form, performance results were excellent.
The canonical example was the compilation of a recursive [LCS](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem) implementation to Verilog, including automated memo-ization and hierarchical memory blocking.
