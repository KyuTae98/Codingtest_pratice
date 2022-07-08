import sys

N,K = map(int,input().split())

nlist = [int(sys.stdin.readline()) for _ in range(N)]

result = 0
i=len(nlist)-1


while K>0:
    result += K//nlist[i]
    K = K % nlist[i]
    i=i-1
print(result)
