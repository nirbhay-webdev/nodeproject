class Rational(n: Int,d: Int) {
    
        private def gcd(x: Int,y: Int): Int = {
            if (x == 0) y
            else if (x < 0) gcd(-x,y)
            else if (y < 0) -gcd(x,-y)
            else gcd(y % x,x) 
            }

        private val g = gcd(n,d);

        val numer = n / g;
        val denom = n / d;


        }
        }

object Squares {
    def main(args: Array[String]): Unit = {
        
        
        def squares(x: Int): Int= x * x;
        var result: Int = squares(2);
        println(result);
        
        def sumOfSqaures(a: Int, b: Int):Int = {
        var res: Int = 0;
        if (a>b) return 0
        else res = squares(a) + sumOfSqaures(a+1,b)
        return res
        }

        result = sumOfSqaures(2,1);
        println(result);

        def powerOfTwo(n: Int): Int = {
            if (n == 0) 1
            else 2 * powerOfTwo(n-1);
        }

        def sumOfPowerOfTwo(a: Int, b: Int): Int= {
        if (a>b) 0
        else powerOfTwo(a) + sumOfPowerOfTwo(a+1,b)
        }

        println(sumOfPowerOfTwo(1,3)); 

        def sum(f:Int => Int,a: Int,b: Int): Int = {
        if (a>b) 0 
        else f(a)+sum(f,a+1,b);
        }

        println(sum(powerOfTwo,1,2));

        def value: Rational = new Rational(1,2);

        println(value);


    }   

    }

   