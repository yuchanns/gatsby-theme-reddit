---
title: How to do something every 5 minutes in Go?
date: 2020-05-22T23:46:03.284Z
description: "How to do something every 5 minutes in Go?"
author: "mknycha"
category: "golang"
---
[[snippet]]
| I feel like it's a dummy question, but I want to ask it anyway since I do not have much experience with concurrent programming.
|
| In the app I am currently working on, someone wrote a code that should do something (in this case, printing "TICK!") every, let's say 5 minutes:
|
| ```go
| go func() {
|    for {
|        fmt.Println("TICK!")
|        time.Sleep(5 * time.Minute)
|    }
| }()
| ```
However, from what I have read, the recommended approach is:

```go
func CallTickerInBackground(done <-chan bool) {
    ticker := time.NewTicker(5 * time.Minute)
    go func() {
        for {
        	select {
        	case <-done:
        		logrus.Info("Stopping ticker")
        		ticker.Stop()
        		return
        	case <-ticker.C:
        		fmt.Println("TICK!")
        	}
        }
    }()
}
```
The advantages of the latter are that we have more stable time intervals (instead of processing time + waiting time) and we have control over stopping the background processing. On the other hand, right now a separate channel to stop it needs to be created, so it's slightly more complex.

So which approach is better, and why (or under what circumstances)?