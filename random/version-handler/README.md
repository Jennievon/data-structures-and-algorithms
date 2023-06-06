Versions can look like "3.12.293" or "1.1.0.321", and is limited to <a.b.c.d>.
 We would like to compare them and find the latest one.
 For example, we're given "3.10" and "1.0.23.99", so in this case "3.10" would be the latest version.
 Other version examples:

 3.10.0.0  vs 3.20.0.0 --> 3.20.0.0
 3.2.1     vs 1.0.0    --> 3.2.1
 1.0.0.0   vs 1.0.0.23 --> 1.0.0.23
 10.99.0.1 vs 1.0.0.1  --> 10.99.0.1
 1.0.0.99   vs 1.2.0 --> 1.2.0
 1.0.0.23 vs 1.0.0 --> 1.0.0.23
 1.0.0  vs.  1.0.0.0 --> 1.0.0

 1.0 vs 1.0.0.4  --> 1.0.0.4

 min: 1 dot
 max: 3 dots