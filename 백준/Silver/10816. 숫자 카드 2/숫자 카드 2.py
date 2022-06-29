from sys import stdin
from bisect import bisect_left, bisect_right

def binarysearch(i,nlist):
    a=bisect_left(nlist,i)
    b=bisect_right(nlist,i)
    return b-a

n = int(input())
binlist = list(map(int,stdin.readline().split()))
binlist.sort()
m = int(input())
test = list(map(int,stdin.readline().split()))

for i in test:
    result = binarysearch(i,binlist)
    print(result,"",end='')
