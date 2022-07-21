---
layout: default-layout
title: Dynamsoft Barcode Reader Introduction - Overview
description: This is the overview page of Dynamsoft Barcode Reader Introduction.
keywords: overview
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /introduction/index.html
---

# Introduction to Dynamsoft Barcode Reader

Dynamsoft Barcode Reader (DBR) enables you to embed barcode reading capabilities with enterprise-class performance in your web, mobile, desktop or server applications using just a few lines of code.

## Supported Barcode Formats

As of version 9.0, DBR supports the following barcode formats:  

| 1D/Linear Barcodes       | 2D Barcodes         | GS1 DataBar             | Postal Codes          | Other Types        |
|--------------------------|---------------------|-------------------------| --------------------- | ------------------ |
| Code 39/Code 39 Extended | QR Code             | Omnidirectional         | USPS Intelligent Mail | GS1 Composite Code |
| Code 93                  | Micro QR Code       | Truncated               | Postnet               | Patch Code         |
| Code 128                 | Data Matrix         | Stacked                 | Planet                | Pharmacode         |
| Codabar                  | PDF417              | Stacked Omnidirectional | Australian Post       |                    |
| Interleaved 2 of 5       | Micro PDF417        | Limited                 | UK Royal Mail         |                    |
| EAN-8                    | Aztec Code          | Expanded                |                       |                    |
| EAN-13                   | MaxiCode (mode 2-5) | Expanded Stacked        |                       |                    |
| UPC-A                    | DotCode             |                         |                       |                    |
| UPC-E                    |                     |                         |                       |                    |
| Industrial 2 of 5        |                     |                         |                       |                    |
| MSI (Modified Plessey)   |                     |                         |                       |                    |
| Code 11                  |                     |                         |                       |                    |

[Learn more about these barcode formats](https://www.dynamsoft.com/Products/Barcode-Types.aspx).

## Supported Platforms

| Platforms | Languages                 |
|-----------|---------------------------|
| <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsSAAALEgHS3X78AAADPklEQVRYhZ1XvY4TMRD+JqKkCG+QDiQKFtEgUWR5AKQtKfMAFCkpt6RMTZXyKpR7AnIFJSKRDonuUlJBkCjoBs3e55zXa3udG2mlxPbMfPNvi6qilERkBqABUAOw388C1j2AA4AtgI2qHkplT0oOiUgtIib8hiDs908A1wAe8bvm2pZnbozHeIuQmEdSH4CKgs2yBYAp1+330f3n2pTnlt7/heehKqsrA2JpOAG0gcIZQdQRnpp7swBgS1nLs4AAWFPgwApat8oYYEq3kfWKMtdFQAhi53shYvFgLxKimMemlD0AEwtHUhG9scjF2suhgVc8MMcwTKfyFRFz3TcAXwH8jeS1CXgK4EtRFQCvAHyn0pAeAngB4Lmq7jr9HhCz9geAi4Tg9yzPdSGQd1T4IbH/FsATVb0tby/2Ftdc7HvVUBCeLjlLc6ko9g5oKQiPL5q0sVyasG3PrSVn3FyP7KfIddkUmcy5YZhwdlyqaiypHFUsu/sAmaU2qfPSMDzwZkeOXDzPIlVdswjGwNYTIh6ztgrLUESWIqIishORluUfs3rMANM9E86AN4ne4egzgNeO0VxKS90ocFeDKePurgG5cDuDjOe3A3I1cn7unbE5szEvsJwXntCKgBry7Als4xpXAkxXQlpQhoMewnAlS5reaei1gxt4/nUiKOPOI8lG5vWZ2BCLTuhMg1tSljI3Gm+/W0g2nVzDo4XJO0aBt06GTOi2aMZ7lOoHWwo8i5jEju9UVUsmU86CJnHZmZbkWMKTvbCClmbzxClMXJZ6sb4PiC40bDhXORfTlfvEmc3IPAmpYQvolXN3H+GV/xOAjwD+JQS8pPcuON5XuOsdFtrkTOkpvD2/ZZKf7jYTWmwbv6gsRWbB43Du0LIpp/go8bwZvhKRUzMM61xzfYHxbSPrm3PL2JtfXVsIN8cuz1Vsn50xW3kj8pqU1dHnhNfc2mBtFpZx7m0UnGs7j55TYr7SyOw5lbHH3+bAeE/XKoc0+uTk3ipscFxbhUb4ylIgBjmSiGHsEe4qZ6F9Tx3dyMgqjYArTSp3nbQ/XYXw+1P6xPCUR8N1bpab1d1sYk7Yon2jz1DyW1c13n7OqOI/jmBGl5fJ/S8AAAAASUVORK5CYII=" alt="web"> Web       | JavaScript                |
| <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABmJLR0QAAAAAAAD5Q7t/AAADm0lEQVRYR82XSyhtURjH/8freBUOAwYSA4RIBpIQBobKhCikyMiAgZSxREomlGIgIykZkgHKQCGPgbylZOKZ9+s4/3XXudexH2efzrq3+6vd2ftba6/zX9/61re+bXO6wH9AgPxVxtnZGaampnByciItFqFHVDE8POwsKytzZmVlOefm5qTVGko88vHxgfr6evT19eHi4gKxsbFISEiQrdZQIqS/vx/Ly8uIiYmBzWZDcnIy0tPTZas1/BZyfn6O6elpREdH4/PzEy8vL6ipqUFQUJDsYQ2/hTAwn56e8P7+jufnZzQ0NKCiokK2WsdvIXt7e7i8vER8fDw6OjrQ3d0tW3zDpzxyf3+PyMhI+fSLxcVFPD4+Ij8/Hw6HQ9gODw8REhKCxMRE8WwFr0K2trYwNDSE1dVV4X52ZyA2NTWhvLwc4eHhYtcsLS1hfHwca2trog+DljFTWlqK1tZWZGdnyxH1MRTy+vqKkZERDA4OIiwsTMyQg5O3tzfhBS5HZmYmDg4OcHx8jIiICNHvO4wfvkcxbW1t0qrFUAi3JGdot9sRGBgorX/ga/QEL7bzcgv9CT15dXWF3t5e1NbWSqsnukLm5+fFDKKiohAQ4F88c3juppycHExOThqK1RVSUlKC6+trjZt9hUMzr7hSPiYmJhAcHCxbtGime3R0JJKU2UtWYbAybuhdb+NphCwsLCgRQW8wNlJTU1FcXCytxmiE7O/vG66jr9AjaWlpluJM0+Pm5kaZEOJOct7QCPF3l/zk7u5O3pmj+VfOQGcj+Qy9ymt3d1dazNEISUpKUiKEMOh57vCY8IZGCM8EZksVcJmZUcfGxqTFGI2QgoIC4VJVyxMaGorZ2Vl0dXWJ7WyEbmTm5eWJQ08FFMMSklVcc3MzdnZ2ZIsnukJYZT08PCiLFYphubC9vY3b21tp9URXCDNhbm6uMq+4sywPvsLCQmn1RFcI17W6ulrMhNlRBaxLWlpa5JMWXSGkqqpKVGI8Pf1ZIr7LZXZ9eIly0gjTUvH09BSVlZXi3tfPA8KhubxxcXGYmZkR9Y0Rhh4hTG7t7e2iLGRu4cDui0vGgocFNS96jrbvffgOk1pnZ6epCGLqETcDAwNwfdf+rlsZePxTujsjI0P0WVlZwfr6ukhi9B7bOYGenh7U1dWJPmZYEkI2NzcxOjoqZllUVKRbe9IrLAc3NjZE7mhsbERKSopsNceykL+NaYz8O4AvmEMyZO/vrSAAAAAASUVORK5CYII=" alt="iOS"> iOS       | Swift, Objective-C        |
| <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABmJLR0QAAAAAAAD5Q7t/AAAEGUlEQVRYR+2XXWwUVRTH/7s7+9HuttuVUmmkFNIC1tgqFAhBYxOj0ugD8Umb+IIJmGiUZ8WYmuiTISEmRvTBB03Kgw/yqeHNj1gSPwIUorRViy0Y2nTb3Xa/ZnZmx3Pu3KVlnaV32ho18ddMd+6dO/f+77nnnnvGZxP4F+CXv/84noSYtolzowOyVJ2p7A1c+OMbWVLDkxDNpyEWjmN4+qIoZ4vzuDE3hon0L5jMXIdZKor6y5PnkahtEveqLMtHjn3/BmLBOvyWuoqMnkKJ/oL+EOrDd6F9zf2IBuN4cstzsrUanoSU7BI+vfIePh/9RAzs9wXocozKndi2RVYxUROMoa/rEB7e8JR4poInIR/+0I9vx7+gmSdg0YCMz+cTv4xNQn1SWEZP4/nuw+jZuE+Ul0LZR85PnMMgiSiRgCN7T2Jb8yMolgz51KFg5tHXeQgv7HyTLORYjx1XBWWLvHK2F7pVoFnb6GjqFk6aNdJiecqwlZpiLQhrEYynRkhoEbvveRwHd/bLFtVRssjQzUEYli4GDQZC+Hnqx7+IYAJ+DVOZCSFC8wfJj4L4PT2M6dxN2aI6SkJGkheQMeagk+kLxZyYuWHq4r7yKloGTKso73Xa2qOYzU3KnqqjtDSXJgcxNvOTmKVXdCuPntZ9aIw2yxp3XIWMp0dwfOhdJGoacXBHP76+dpqC1CAtS1i2UCdfzOKZzpfJ9H4MDB2l5QvgxV1vi2VcjKuQl848Rh3kyMQGnmh/FuFgLU5d/QgRrVa2UGeeAt6R3hN466sDYmnZgR/d9DT2b39NtnBw9ZEciQhrNQjRZdBO4eAVImss9+LZs+9EqL8wlfNmVo60gKuQcrTkWFUOUCvF6YeDn+9W/4tZnVFWgf+FVPLfECL2tdpRpEC5H9u1yzsIodb0Br/j/F8ZHK74RK6Gq5DtdMTP5KconmSwu2WviAErgWMRJ0mpfJLOrDQeWPeQfLKAa2TlLGs0eQkNkUY017Xi44vv4Muxz0RkXZwILQV3PafP4nDPB+hYuwO/Jq8gENCwseFe2WIBV4toFAk71nYLEcy66HqRBM0bs7cSZIZTRw7hfGWNeVnrUDBzmKP20VAdaim/Zdoon3UTwSidvnxGXKNEORSIYODyUco3hp1chN58tecYnUsZpApJvP/d62JgFtHb3ocHaYk5xLfUt8NPh92dUNq+fO5sbdyGTYkOxEL1whIONjbEN4tn95HpTZk6cr6yPt6GzWu60NqwdUkRjJKQxSyIuH03VTo0+5kXPAu5bSUrFnUl29yzEMYih+VPhxJ9x5RhEU5dCRbVexXlWQg7YTQUR1qfQVfzHlkL8SnaefcepAvTwm/aEp3yiRpKu6YSfoWjZGUWz7CV3OqXYllC/g6W5SOrD/AnZ/TjX8xYY2sAAAAASUVORK5CYII=" alt="android"> Android   | Java, Kotlin              |
| <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABmJLR0QAAAAAAAD5Q7t/AAAC20lEQVRYR+1YTU8TURQ9MwUKBtmhJi5cQYj+BdfujRsX/gjFuDHGaKI/wDUrN0b3xh9gIggREqWGalRKaUu/Kf2a7xnPfZSmaWpKS1tZ9CSHO3TezD3z3vTde6oFBEaMuuNjK2FhNV7H+r6Jj7t1DEWI5wdwPNIHSqaHSMbC2p6Jz0y8GjdRK9rHA0MaMEEynlmI7fqo2AGqto+q5eFXwcFmwsRWysSXpIVMzqIyppCkJ9R5ocbYgq5C5OmOTB9li+TTpasebl6bwYUpHW+/Hqmn/XZgY5sxlmVSjuuWtBOaQnyGQt1DvuapKMww6X7JwV6D8ZKL2J6ByNMF3LgchvbgOy/kxTK9uiSWO3ZP2gna681SkDpykay4OKg4SJVdpCoe5DOHYiA6JcnJk9Vc7DxfxNJ8GBOPo/Bk2uX8GaHNPIkGBmehmVDueRIV5U8LKHTn2cLAhegGXzJM8UbTnFeuOyZJtbZkn9PcD/RRJ/wXZOXPBcZC2jEW0g5dbcm9kF93j0HgSVXrNKYPanffJNQWf1pI3Vm5cwVX5yZx711KVdkB7GfDaQP6gbb8Pt2TkAqn8cWteVyancCjD1m4rM4DmRHcj/Q2IyyOkZdLx9X3Iauvy88G8Mrrqsb0wnAIoUbiEI8xzX86jeuR432kHWMh7ThHQrgPqDbxP0O/OMOvD7d70CpIHVGuSPrQEQvUVjYOg92igwSb4hw79FzVRbbqI8NjS7p4EaTaSY6WyPND6eJba02+7iItdqLs0VqIrZBjWo2yg6RYDjlOiK9ZPN5Zl9t8jbxx/fqabkVPTmdpN8R4idDYoYvb12cxx93w1aciolkbP/I2fpLJAj2tLG/T5Z1e3Jmrb5VFUFxh0SAZf3OZt9MWrajJaKMghluWr4u4obQBdTHkZI3MU1w0Z9OYWzTmhjLmRqnl14AGR9aPSLtgu4GKYuQ3kybW4gbW9w1s/BnS7yO9A/gLfUQF0bmT1EYAAAAASUVORK5CYII=" alt="win"> Windows   | C, C++, C\#, Python, Java |
| <img src="data:image/png;base64,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" alt = "linux"> Linux     | C, C++, Python, Java      |
| <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUfSURBVFhH7ZbdaxxVGMaf3dnP2c1uN5ukSZqaEvupFYofQWuhUL8iUoRK9cYLhRa9UQteCBUt4n9Q8F8QERGv/ACNVizoXdCaGJOuITFJN0mz2Z3Zz5nZ9TlnNrtzYpP0LrnoAz/O7JzZM8+873veGV+Dwi6QvznuuO4Z2SilRr6at+Q4ZdZxN5XjDwaxtJLHuc4qhu9LolCxmzObS9wuFAzI41hMl6PQ7ozIe3+U5SjO+OTR1sojiNTiTVx5tAvBVBq1mhvRrRQMBJDL5+Vxd3qPHIWUiFTrLqYDGNtQ9Acwm72NY7EGIukkzFIJlm1tS9WqwR/QJF4pRgqMhGCt3tgcx2XFF0TNyONYMsh/BsCpu6Z90JZiZM1xySk0kLPrKHXrKIR1rFoNyVzZRspnYSilwxIp4boipRavFei6jj0dOhynjjpvKuYEDHjr2CvFSJE3FZgeinUf0xBE5ttRLM/OoBwNSRYLJXRpNtIJHaWqzQdsSCLhoORmJoPvvv8RoRAj5vO15hs0xT0p8UoxUqL7jZRpohII48Y7Z5H95RvY3UHJasFET4CLRcOwHIdPKJ66gQ49LPlp9Aece/Es/FqQZkKteS9eqUboVlD0YDLMgvDgEVixJPI17hZSZHH2RVhw7CW8jAur4Y53JHD48BF5Q5Ge9XkvXinb94Fr7rYSKWmLG9nvQ6OQgy/CnHck5dns5BQ+vb+Ol089iFu5ojwnpPndZyuVy6hWKujsTMGmkXVpmsaaqsrj/u6UHIWUiOyk7piaEiPShrVSs1HbO4hyKIYcG41Acyx0RViIvMYb7prlSDqYmv2DA+wbjpI6L16pRpoFWtwIVyrkbsOslFHmb4Hm2EiE/HBYP+vFJ+AGkVSYltxqwe3QnnkvXilGKny67UCNzYWErQqO9ySgMSr9XQl0chtX7fY23pr/9TO1WBNfr8jRsJun6iwyPc6r6LdYoG2O4Zicik6N4bI2h76eNJZWDQwfP4SHHzrIVu8WopDD/ycSCfaOOgzTlIXsFiu3HTXY1ylHISUiLavriGb0zwRNGEB6rygAts6KpNw7iA+W07jwu4PLv5r45LdppELi/SGS4ZPddaA3BcMwMfnXJKJcSzyyhFcIvFKNMPcKcW7VmT+BNx4D5qeBw/00yL8ItBAwfBI4dQZ4agT+Ps6VS4jG4pKh/hTGxyfx5PAJTE9NYE8yJtu74C6McNpLlql69lVg5DXgLd7w6seMzppLVzeQ5IdNnFHT04im9/F3Esu3ZiXvf3gFz488hwsXL+L8K+exsGLId44LDQlHHqlGdlBqsX6xKEelWDV+1h3oBa5fA768ypg2PweTjEiUhRvt4L6v4oi9hNN7Q5jPZuV0OBrH25fexeknHkEma3Cb26x1nyxWm98kQgf3peUopBr5fEGOBl/zbfFYGOpm6MW7ZWLMPX3jOlM3A65K6uhpGPjohZN4/MwzcvrE0QPI0/Pi4ip3S7O5UMKI0zRyaGAzI5/Ny1E1sq7muYi7fRHneyLExUVyuWMHb01g/KUh1AIsYip7OyfHjd+c3ogc3c+oNqXUSIM7RdCqJgURGVIyXZbmgH9ngVmOy1nMzc1i7O8M7GpF0pLwvxkeKUbMGl/5ROkl28Lr2ajqlh8LRqX1PeLnk9+JAD8bLO5IgVdKal7/2e2sowsV2Xiaad1eoQiQmcabQw4uPX1CnsrkSnL0yscFbRZtSnfTt7+33VkVIzupXdNH7hnZqF1iBPgPzNu7h6jXtNYAAAAASUVORK5CYII=" alt="macos"> macOS     | C, C++, Python, Java      |

## Next Step

Choose the programming language you use to build your application and learn how to use DBR to add barcode reading capabilities:

### Web

* [JavaScript]({{site.js}}user-guide/)

### Mobile

* [Java (Android)]({{site.android}})
* [Object-C or Swift (iOS)]({{site.oc}})

### Server / Desktop

* [Python]({{site.python}})
* [Java]({{site.java}})
* [C\#]({{site.dotnet}})
* [C++]({{site.cpp}})
* [C]({{site.c}})
