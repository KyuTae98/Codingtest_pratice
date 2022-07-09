import sys

N = int(input())

nlist = list(map(int,sys.stdin.readline().split()))

nlist.sort()

for i in range(1,N):
    nlist[i] += nlist[i-1]

print(sum(nlist))
