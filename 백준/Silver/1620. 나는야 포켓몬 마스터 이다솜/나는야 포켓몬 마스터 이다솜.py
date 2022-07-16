import sys
import math

N,M = map(int,input().split())

nlist = list(sys.stdin.readline().rstrip() for _ in range(N))
problem = list(sys.stdin.readline().rstrip() for _ in range(M))

for i in problem:
    if i.isdigit()==True:
        print(nlist[int(i)-1])
    else:
        print(nlist.index(i)+1)
        
