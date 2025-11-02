export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Soma de Dois Números",
    difficulty: "Easy",
    category: "Array • Tabela Hash",
    description: {
      text: "Dado um array de inteiros nums e um inteiro target, retorne os índices de dois números no array que somam o valor target.",
      notes: [
        "Você pode assumir que cada entrada terá exatamente uma solução e não pode usar o mesmo elemento duas vezes.",
        "Você pode retornar a resposta em qualquer ordem.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Porque nums[0] + nums[1] == 9, retornamos [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Existe apenas uma resposta válida",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Escreva sua solução aqui
  
}

// Casos de teste
console.log(twoSum([2, 7, 11, 15], 9)); // Esperado: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Esperado: [1, 2]
console.log(twoSum([3, 3], 6)); // Esperado: [0, 1]`,
      python: `def twoSum(nums, target):
    # Escreva sua solução aqui
    pass

# Casos de teste
print(twoSum([2, 7, 11, 15], 9))  # Esperado: [0, 1]
print(twoSum([3, 2, 4], 6))  # Esperado: [1, 2]
print(twoSum([3, 3], 6))  # Esperado: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Escreva sua solução aqui
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Esperado: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Esperado: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Esperado: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Inverter String",
    difficulty: "Easy",
    category: "String • Dois Ponteiros",
    description: {
      text: "Escreva uma função que inverta uma string. A string de entrada é fornecida como um array de caracteres s.",
      notes: [
        "Você deve fazer isso modificando o array de entrada in-place com O(1) de memória extra.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] é um caractere ASCII imprimível"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Escreva sua solução aqui
  
}

// Casos de teste
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Esperado: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Esperado: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Escreva sua solução aqui
    pass

# Casos de teste
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Esperado: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Esperado: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Escreva sua solução aqui
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Esperado: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Esperado: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Palíndromo Válido",
    difficulty: "Easy",
    category: "String • Dois Ponteiros",
    description: {
      text: "Uma frase é um palíndromo se, após converter todas as letras maiúsculas em minúsculas e remover todos os caracteres não alfanuméricos, ela é lida da mesma forma de frente para trás e de trás para frente. Caracteres alfanuméricos incluem letras e números.",
      notes: [
        "Dada uma string s, retorne true se ela for um palíndromo, ou false caso contrário.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" é um palíndromo.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" não é um palíndromo.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's é uma string vazia "" após remover caracteres não alfanuméricos. Como uma string vazia é lida da mesma forma de frente para trás e de trás para frente, é um palíndromo.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consiste apenas de caracteres ASCII imprimíveis",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Escreva sua solução aqui
  
}

// Casos de teste
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Esperado: true
console.log(isPalindrome("race a car")); // Esperado: false
console.log(isPalindrome(" ")); // Esperado: true`,
      python: `def isPalindrome(s):
    # Escreva sua solução aqui
    pass

# Casos de teste
print(isPalindrome("A man, a plan, a canal: Panama"))  # Esperado: True
print(isPalindrome("race a car"))  # Esperado: False
print(isPalindrome(" "))  # Esperado: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Escreva sua solução aqui
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Esperado: true
        System.out.println(isPalindrome("race a car")); // Esperado: false
        System.out.println(isPalindrome(" ")); // Esperado: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Subarray com Soma Máxima",
    difficulty: "Medium",
    category: "Array • Programação Dinâmica",
    description: {
      text: "Dado um array de inteiros nums, encontre o subarray com a maior soma e retorne essa soma.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "O subarray [4,-1,2,1] tem a maior soma 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "O subarray [1] tem a maior soma 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "O subarray [5,4,-1,7,8] tem a maior soma 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Escreva sua solução aqui
  
}

// Casos de teste
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Esperado: 6
console.log(maxSubArray([1])); // Esperado: 1
console.log(maxSubArray([5,4,-1,7,8])); // Esperado: 23`,
      python: `def maxSubArray(nums):
    # Escreva sua solução aqui
    pass

# Casos de teste
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Esperado: 6
print(maxSubArray([1]))  # Esperado: 1
print(maxSubArray([5,4,-1,7,8]))  # Esperado: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Escreva sua solução aqui
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Esperado: 6
        System.out.println(maxSubArray(new int[]{1})); // Esperado: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Esperado: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container com Mais Água",
    difficulty: "Medium",
    category: "Array • Dois Ponteiros",
    description: {
      text: "Você recebe um array de inteiros height com comprimento n. Existem n linhas verticais desenhadas de modo que os dois pontos finais da i-ésima linha sejam (i, 0) e (i, height[i]).",
      notes: [
        "Encontre duas linhas que, junto com o eixo x, formem um container, de modo que ele contenha a maior quantidade de água.",
        "Retorne a quantidade máxima de água que o container pode armazenar.",
        "Note que você não pode inclinar o container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "As linhas verticais são representadas pelo array [1,8,6,2,5,4,8,3,7]. Nesse caso, a área máxima de água que o container pode conter é 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Escreva sua solução aqui
  
}

// Casos de teste
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Esperado: 49
console.log(maxArea([1,1])); // Esperado: 1`,
      python: `def maxArea(height):
    # Escreva sua solução aqui
    pass

# Casos de teste
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Esperado: 49
print(maxArea([1,1]))  # Esperado: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Escreva sua solução aqui
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Esperado: 49
        System.out.println(maxArea(new int[]{1,1})); // Esperado: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
