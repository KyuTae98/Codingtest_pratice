import sys

N = int(input())

max_result = [0]*3
min_result = [0]*3
max_tmp = [0]*3
min_tmp = [0]*3

for i in range(N):
    a,b,c = map(int,sys.stdin.readline().split())
    for j in range(3):
        if j==0:
            max_tmp[j] = max(max_result[0],max_result[1]) + a
            min_tmp[j] = min(min_result[0],min_result[1]) + a
        elif j==1:
            max_tmp[j] = max(max_result[0],max_result[1],max_result[2]) + b
            min_tmp[j] = min(min_result[0],min_result[1],min_result[2]) + b
        elif j==2:
            max_tmp[j] = max(max_result[1],max_result[2]) + c
            min_tmp[j] = min(min_result[1],min_result[2]) + c
    for j in range(3):
        max_result[j]=max_tmp[j]
        min_result[j]=min_tmp[j]


print(max(max_result),min(min_result))
