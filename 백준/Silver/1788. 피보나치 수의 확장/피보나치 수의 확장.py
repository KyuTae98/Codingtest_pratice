N = int(input())

nlist = [0,1]

if N%2==0 and N<0:
    print(-1)
elif N==0:
    print(0)
else:
    print(1)


for i in range(2,abs(N)+1):
    nlist.append((nlist[i-1]+nlist[i-2])%1000000000)

print(nlist[abs(N)])
