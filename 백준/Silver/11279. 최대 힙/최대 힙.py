import heapq
import sys

n = int(input())
nlist = []

for i in range(n):
    num = int(sys.stdin.readline())
    if num==0:
        try:
            print(heapq.heappop(nlist)[1])
        except:
            print(0)
    else:
        heapq.heappush(nlist,(-num,num))
