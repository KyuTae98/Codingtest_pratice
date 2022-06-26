from collections import deque

n = int(input())

dec = deque(range(1,n+1))


while len(dec)>1:
    dec.popleft()
    dec.append(dec.popleft())

print(dec[0])
