---
title: Replacing net.DefaultResolver with a caching DNS over TLS/HTTPS resolver
date: 2020-05-24T23:46:03.284Z
description: "Replacing net.DefaultResolver with a caching DNS over TLS/HTTPS resolver"
author: "ncruces"
category: "golang"
---
[[snippet]]
| DNS caching has been discussed multiple times in the past. The consensus seems to be that Go won't go there: [github.com/golang/go/issues/24796](https://github.com/golang/go/issues/24796)
| 
| I've seen a few DNS caching solutions for Go ([one](https://github.com/rs/dnscache), [two](https://github.com/mercari/go-dnscache)), however, I haven't seen any implementations that allow replacing the `net.DefaultResolver`?
| 
| Package [github.com/artyom/dot](https://github.com/artyom/dot) got me thinking if I could do the same for DNS caching, and also DNS over HTTPS.
| 
| So [github.com/ncruces/go-dns](https://godoc.org/github.com/ncruces/go-dns) is my attempt. Replacing `net.DefaultResolver` with a caching DNS over HTTPS resolver using 1.1.1.1 as the name server should be this simple:
| ```go
| net.DefaultResolver = dns.NewCachingResolver(dns.NewHTTPSResolver(
	"1.1.1.1", "2606:4700:4700::1111",
	"1.0.0.1", "2606:4700:4700::1001"))
```
What do you guys thing? Do you know of any other implementations that allow replacing `net.DefaultResolver`?