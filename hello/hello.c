
void swap(int *a, int *b) {
	int *c = a;
	a = b;
	b = c;
}

int main() {
	int a = 1; 
	int b = 2;
	swap(&a, &b);
}