merge = (M, m, N, n) => { while (n) M[n + m - 1] = m && M[m - 1] >= N[n - 1] ? M[--m] : N[--n]}