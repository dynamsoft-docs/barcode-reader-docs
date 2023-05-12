---
layout: default-layout
title: How many concurrent instances I should purchase?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, General, concurrent, instance, license.
description: How many concurrent instances I should purchase?
needAutoGenerateSidebar: false
permalink: /faq/general/purchase-concurrent-instance-license.html
---

## How many concurrent instances I should purchase?
To make the most of our DBR instance, we suggest creating no more than the same number of threads as your CPU.

For instance, if your CPU has 2 cores with 2 threads each, creating 4 DBR instances is a good idea.

In the cloud, such as on AWS, each vCPU represents a single thread, so it's reasonable to create DBR instances based on the number of vCPUs.

If you're running a single DBR instance with two threads in your environment, its performance will be similar to that of two instances running in the same two-thread environment.

Please note:

Creating more DBR instances than the threads in your environment won't cause any problems, but it may reduce the performance of each instance.

By default, a small portion of the DBR image decoding process uses multithreading. This multithreading occurs when there are available time slots for threads.