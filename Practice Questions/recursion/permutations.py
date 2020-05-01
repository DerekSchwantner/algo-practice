# generate all the permutations of an array

def perm(a, k=0):
   if k == len(a):
      print a
   else:
      for i in xrange(k, len(a)):
         a[k], a[i] = a[i] ,a[k]
         perm(a, k+1)
         a[k], a[i] = a[i], a[k]

perm([1,2,3])