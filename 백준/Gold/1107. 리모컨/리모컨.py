import sys

def detectnlist(N,nlist):
    N=str(N)
    for i in N:
        if int(i) in nlist:
            return 0
    return 1

N = input()
task1 = abs(int(N)-100)
task2 = 0
check = 0
M = int(input())

if M!=0:
    nlist = list(map(int,sys.stdin.readline().split()))
    if M==10:
        task2 = task1
    else:
        flag = detectnlist(N,nlist)
        if flag==1:
            task2 += len(N)
        else:
            k=1
            while flag==0:
                check = int(N)-k
                if check<0:
                    check=0
                flag = detectnlist(check,nlist)
                if flag==1:
                    task2 = len(str(check))
                    break
                check = int(N)+k
                flag = detectnlist(check,nlist)
                if flag==1:
                    task2 = len(str(check))
                    break
                k+=1
            task2+=k
else:
    task2 += len(N)

print(min(task1,task2))
