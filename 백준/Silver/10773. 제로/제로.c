#include <stdio.h>
#include <string.h>
#include <stdlib.h>


typedef struct stack {
	int num;
	struct stack* next;
}stack;
stack* init(stack* node,int n);
void push(stack* node,int n);
void pop(stack* node);
int Sum(stack* node);
void Free(stack* node);
int main() {
	int n, i,m,sum;
	stack* head=NULL;
	head = init(head,0);
	scanf("%d", &n);
	for (i = 0; i < n; i++) {
		scanf("%d", &m);
		if (m == 0)
			pop(head);
		else
			push(head, m);
	}
	sum = Sum(head);
	printf("%d", sum);
	Free(head);
	return 0;
}
stack* init(stack* node,int n) {
	node = (stack*)malloc(sizeof(stack));
	node->num = n;
	node->next = NULL;
	return node;
}
void push(stack* node, int n) {
	stack* new_node = NULL;
	new_node = init(new_node, n);
	new_node->next = node->next;
	node->next = new_node;
}
void pop(stack* node) {
	if (node->next) {
		stack* p = node->next;
		node->next = node->next->next;
		free(p);
	}
}
int Sum(stack* node) {
	int sum = 0;
	if (node->next) {
		node = node->next;
		while (node) {
			sum += node->num;
			node = node->next;
		}
	}
	return sum;
}
void Free(stack* node) {
	stack* p1 = node->next,*p2;
	while (p1) {
		p2 = p1->next;
		free(p1);
		p1 = p2;
	}
}