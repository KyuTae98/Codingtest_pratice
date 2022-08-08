import sys
 
num = int(input())
conec = int(input())
glaph = [[0 for _ in range(num+1)] for _ in range(num+1)]
result = [1]
count = [1]


for _ in range(conec):
    n,m = map(int,sys.stdin.readline().split())
    glaph[n][m] = 1
    glaph[m][n] = 1

while len(result)>0:
    f=result.pop(0)
    for i in range(1,num+1):
        if glaph[f][i]==1 and i not in count:
            result.append(i)
            count.append(i)

print(len(count)-1)
