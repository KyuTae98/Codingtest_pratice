num_list = []
for i in range(10):
    num = int(input())
    num_list.append(num%42)
new_set = set(num_list)
print(len(new_set))
