```
$Friends

1     - David
2     - Riley
4     - Sandra
8     - Angel
16    - Simon
32    - Danny
64    - Belle
128   - Mason
256   - Oreo
512   - Bobby
1024  - Inky
2048  - Charlie
4096  - Alijah
8192  - Kristin

16384 - Spirit
32768 - Water

$Friends2

1     - Jayro
2     - Liz
4     - Tim
8     - Knute
16    - Emily
32    - Steve
64    - James
128   - Laura
256   - Josh
512   - Nicole
1024  - Sara
2048  - Anne
4096  - Wade
8192  - Donna

16384 - Forest
32768 - Desert
```

## GODS

```
($Friends & 16384) && ($Friends & 32768) && ($Friends2 & 16384) && ($Friends2 & 32768)
```

## FOREST

```
($Friends & 1) && ($Friends & 2) && ($Friends & 8) && ($Friends & 8192) && ($Friends & 32) && ($Friends & 128) && ($Friends2 & 4) && ($Friends2 & 512) && ($Friends2 & 2) && ($Friends2 & 16)
```

- David
- Riley
- Angel
- Kristin
- Danny
- Mason

- Tim
- Nicole
- Liz
- Emily


## FIRE

($Friends & 64) && ($Friends & 4) && ($Friends & 16) && ($Friends2 & 8192) && ($Friends2 & 256) && ($Friends2 & 64) && ($Friends2 & 1) && ($Friends2 & 8) 

- Belle
- Sandra
- Simon

- Donna
- Josh
- James
- Jayro
- Knute


## ICE

($Friends & 4096) && ($Friends & 512) && ($Friends & 2048) && ($Friends2 & 128) && ($Friends2 & 2048) && ($Friends2 & 32)

- Alijah
- Bobby
- Charlie

- Laura
- Anne
- Steve


## SPIRIT

($Friends & 256) && ($Friends & 1024) && ($Friends2 & 4096) && ($Friends2 & 1024)

- Oreo
- Inky

- Wade
- Sara




