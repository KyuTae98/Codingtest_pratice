import sys
import math


count = int(input())

for i in range(count):
    N,M = map(int,sys.stdin.readline().split())
    print(math.factorial(M)//(math.factorial(N)*math.factorial(M-N)))
    
