n,k = map(int,input().split())

k-=1

rear = k

joseque = list(range(1,n+1))

result = []

while len(joseque)>0:
    result.append(joseque.pop(k))
    if len(joseque)>0:
        k=(k+rear)%len(joseque)

print("<",end='')
for i in range(len(result)-1):
    print("%d, "%result[i], end='')
print(result[-1], end='')
print(">")
