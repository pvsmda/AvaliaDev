/* eslint-disable no-useless-escape */
export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Soma de Dois Números",
    difficulty: "Easy",
    category: "Array • Tabela Hash",
    description: {
      text: "Dado um array de inteiros `nums` e um inteiro `target`, retorne os índices de dois números no array que somam `target`.",
      notes: [
        "Cada entrada terá exatamente uma solução.",
        "Não use o mesmo elemento duas vezes.",
      ],
    },
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def twoSum(nums, target):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int[] twoSum(int[] nums, int target) {\n        // Escreva sua solução aqui\n        return new int[0];\n    }\n}\n`,
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
      text: "Inverta uma string dada como array de caracteres `s` in-place.",
      notes: ["Use O(1) memória extra."],
    },
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] é um caractere ASCII imprimível"],
    starterCode: {
      javascript: `function reverseString(s) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def reverseString(s):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static void reverseString(char[] s) {\n        // Escreva sua solução aqui\n    }\n}\n`,
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
      text: "Verifique se uma string é palíndromo considerando apenas caracteres alfanuméricos e ignorando maiúsculas/minúsculas.",
      notes: [],
    },
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
      { input: 's = "race a car"', output: "false" },
      { input: 's = " "', output: "true" },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2*10⁵",
      "s consiste em caracteres ASCII imprimíveis",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def isPalindrome(s):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static boolean isPalindrome(String s) {\n        // Escreva sua solução aqui\n        return false;\n    }\n}\n`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },
  "palindrome-number": {
    id: "palindrome-number",
    title: "Número Palíndromo",
    difficulty: "Easy",
    category: "Matemática",
    description: {
      text: "Verifique se um número inteiro é um palíndromo sem converter para string.",
      notes: [],
    },
    examples: [
      { input: "x = 121", output: "true" },
      { input: "x = -121", output: "false" },
      { input: "x = 10", output: "false" },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPalindrome(x) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def isPalindrome(x):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static boolean isPalindrome(int x) {\n        // Escreva sua solução aqui\n        return false;\n    }\n}\n`,
    },
  },

  "fizz-buzz": {
    id: "fizz-buzz",
    title: "Fizz Buzz",
    difficulty: "Easy",
    category: "String • Matemática",
    description: {
      text: "Para cada número de 1 a n, retorne 'Fizz' se múltiplo de 3, 'Buzz' se múltiplo de 5, 'FizzBuzz' se múltiplo de 3 e 5, senão o próprio número.",
      notes: [],
    },
    examples: [
      { input: "n = 3", output: '["1","2","Fizz"]' },
      { input: "n = 5", output: '["1","2","Fizz","4","Buzz"]' },
    ],
    constraints: ["1 ≤ n ≤ 10⁴"],
    starterCode: {
      javascript: `function fizzBuzz(n) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def fizzBuzz(n):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static List<String> fizzBuzz(int n) {\n        // Escreva sua solução aqui\n        return new ArrayList<>();\n    }\n}\n`,
    },
  },

  "roman-to-integer": {
    id: "roman-to-integer",
    title: "Romano para Inteiro",
    difficulty: "Easy",
    category: "String • Matemática",
    description: {
      text: "Converta um numeral romano para um inteiro.",
      notes: [],
    },
    examples: [
      { input: 's = "III"', output: "3" },
      { input: 's = "LVIII"', output: "58" },
      { input: 's = "MCMXCIV"', output: "1994" },
    ],
    constraints: ["1 ≤ s.length ≤ 15", "s é um numeral romano válido"],
    starterCode: {
      javascript: `function romanToInt(s) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def romanToInt(s):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int romanToInt(String s) {\n        // Escreva sua solução aqui\n        return 0;\n    }\n}\n`,
    },
  },

  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Inverter Lista Ligada",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Dada a cabeça de uma lista ligada, inverta a lista e retorne a nova cabeça.",
      notes: [],
    },
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" },
      { input: "head = []", output: "[]" },
    ],
    constraints: ["Número de nós: 0 ≤ n ≤ 5000", "-5000 ≤ Node.val ≤ 5000"],
    starterCode: {
      javascript: `function reverseList(head) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def reverseList(head):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static ListNode reverseList(ListNode head) {\n        // Escreva sua solução aqui\n        return null;\n    }\n}\n`,
    },
  },

  "remove-element": {
    id: "remove-element",
    title: "Remover Elemento",
    difficulty: "Easy",
    category: "Array • Dois Ponteiros",
    description: {
      text: "Dado um array nums e um valor val, remova todas as ocorrências de val in-place e retorne o novo tamanho.",
      notes: ["Não use espaço extra, modifique o array original."],
    },
    examples: [
      { input: "nums = [3,2,2,3], val = 3", output: "2" },
      { input: "nums = [0,1,2,2,3,0,4,2], val = 2", output: "5" },
    ],
    constraints: ["0 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 50", "0 ≤ val ≤ 100"],
    starterCode: {
      javascript: `function removeElement(nums, val) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def removeElement(nums, val):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int removeElement(int[] nums, int val) {\n        // Escreva sua solução aqui\n        return 0;\n    }\n}\n`,
    },
  },

  "implement-queue-using-stacks": {
    id: "implement-queue-using-stacks",
    title: "Implementar Fila usando Pilhas",
    difficulty: "Easy",
    category: "Design • Stack",
    description: {
      text: "Implemente uma fila usando apenas duas pilhas.",
      notes: ["A fila deve suportar push, pop, peek e empty."],
    },
    examples: [
      {
        input: ["MyQueue", "push", "push", "peek", "pop", "empty"],
        output: "[null,null,null,1,1,false]",
      },
    ],
    constraints: ["Até 1000 operações serão feitas"],
    starterCode: {
      javascript: `class MyQueue {\n  constructor() {\n    // Inicialize sua estrutura\n  }\n}\n`,
      python: `class MyQueue:\n    def __init__(self):\n        # Inicialize sua estrutura\n        pass\n`,
      java: `class MyQueue {\n    public MyQueue() {\n        // Inicialize sua estrutura\n    }\n}\n`,
    },
  },

  "intersection-of-two-arrays-ii": {
    id: "intersection-of-two-arrays-ii",
    title: "Interseção de Dois Arrays II",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Dado dois arrays, retorne um array representando a interseção, incluindo duplicatas.",
      notes: ["O resultado pode estar em qualquer ordem."],
    },
    examples: [
      { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2,2]" },
      { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output: "[4,9]" },
    ],
    constraints: [
      "1 ≤ nums1.length, nums2.length ≤ 1000",
      "0 ≤ nums1[i], nums2[i] ≤ 1000",
    ],
    starterCode: {
      javascript: `function intersect(nums1, nums2) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def intersect(nums1, nums2):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int[] intersect(int[] nums1, int[] nums2) {\n        // Escreva sua solução aqui\n        return new int[0];\n    }\n}\n`,
    },
  },
  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Subarray com Soma Máxima",
    difficulty: "Medium",
    category: "Array • Programação Dinâmica",
    description: {
      text: "Encontre a soma máxima de um subarray contínuo.",
      notes: [],
    },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def maxSubArray(nums):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int maxSubArray(int[] nums) {\n        // Escreva sua solução aqui\n        return 0;\n    }\n}\n`,
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
      text: "Dado um array de alturas, encontre o par de linhas que forma um container que retém a maior quantidade de água.",
      notes: ["Não incline o container."],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["2 ≤ height.length ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def maxArea(height):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int maxArea(int[] height) {\n        // Escreva sua solução aqui\n        return 0;\n    }\n}\n`,
    },
    expectedOutput: { javascript: "49\n1", python: "49\n1", java: "49\n1" },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Produto do Array Exceto Ele Mesmo",
    difficulty: "Medium",
    category: "Array • Matemática",
    description: {
      text: "Dado um array `nums`, retorne um array `answer` tal que answer[i] seja o produto de todos os elementos exceto nums[i].",
      notes: ["Não use divisão.", "Faça em O(n) tempo e O(1) espaço extra."],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def productExceptSelf(nums):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int[] productExceptSelf(int[] nums) {\n        // Escreva sua solução aqui\n        return new int[0];\n    }\n}\n`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24,12,8,6]\n[0,0,9,0,0]",
      java: "[24,12,8,6]\n[0,0,9,0,0]",
    },
  },

  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating",
    title: "Substring Mais Longa Sem Repetição",
    difficulty: "Medium",
    category: "String • Hash Table",
    description: {
      text: "Dada uma string s, encontre o comprimento da substring sem caracteres repetidos mais longa.",
      notes: [],
    },
    examples: [
      { input: 's = "abcabcbb"', output: "3" },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3" },
    ],
    constraints: ["0 ≤ s.length ≤ 5*10⁴", "s consiste de caracteres ASCII"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def lengthOfLongestSubstring(s):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int lengthOfLongestSubstring(String s) {\n        // Escreva sua solução aqui\n        return 0;\n    }\n}\n`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "letter-combinations-of-phone-number": {
    id: "letter-combinations-of-phone-number",
    title: "Combinações de Letras de Número de Telefone",
    difficulty: "Medium",
    category: "Backtracking • String",
    description: {
      text: "Dado um string contendo dígitos de 2 a 9, retorne todas as combinações possíveis de letras que o número poderia representar.",
      notes: [],
    },
    examples: [
      {
        input: 'digits = "23"',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
      },
      { input: 'digits = ""', output: "[]" },
    ],
    constraints: ["0 ≤ digits.length ≤ 4", "digits[i] é de '2'-'9'"],
    starterCode: {
      javascript: `function letterCombinations(digits) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def letterCombinations(digits):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static List<String> letterCombinations(String digits) {\n        // Escreva sua solução aqui\n        return new ArrayList<>();\n    }\n}\n`,
    },
    expectedOutput: {
      javascript: '["ad","ae","af","bd","be","bf","cd","ce","cf"]\n[]',
      python: '["ad","ae","af","bd","be","bf","cd","ce","cf"]\n[]',
      java: '["ad","ae","af","bd","be","bf","cd","ce","cf"]\n[]',
    },
  },

  "3sum": {
    id: "3sum",
    title: "Tripla com Soma Zero",
    difficulty: "Medium",
    category: "Array • Dois Ponteiros",
    description: {
      text: "Dado um array nums, encontre todas as tripletas únicas que somam zero.",
      notes: ["Não deve haver duplicatas nas respostas."],
    },
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
    ],
    constraints: ["0 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def threeSum(nums):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static List<List<Integer>> threeSum(int[] nums) {\n        // Escreva sua solução aqui\n        return new ArrayList<>();\n    }\n}\n`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]",
      python: "[[-1,-1,2],[-1,0,1]]",
      java: "[[-1,-1,2],[-1,0,1]]",
    },
  },
  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Substring Mais Longa sem Caracteres Repetidos",
    difficulty: "Medium",
    category: "String • Hash Table • Sliding Window",
    description: {
      text: "Dada uma string s, encontre o comprimento da substring mais longa sem caracteres repetidos.",
      notes: [],
    },
    examples: [
      { input: 's = "abcabcbb"', output: "3" },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3" },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5*10⁴",
      "s consiste de letras, dígitos, símbolos e espaços",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def lengthOfLongestSubstring(s):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int lengthOfLongestSubstring(String s) {\n        // Escreva sua solução aqui\n        return 0;\n    }\n}\n`,
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Parênteses Válidos",
    difficulty: "Medium",
    category: "String • Stack",
    description: {
      text: "Dada uma string contendo '(', ')', '{', '}', '[' e ']', determine se a string é válida.",
      notes: [
        "Uma string é válida se os parênteses forem fechados na ordem correta.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consiste apenas de '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def isValid(s):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static boolean isValid(String s) {\n        // Escreva sua solução aqui\n        return false;\n    }\n}\n`,
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Subindo Escadas",
    difficulty: "Medium",
    category: "Matemática • DP",
    description: {
      text: "Você está subindo uma escada com n degraus. Cada vez, você pode subir 1 ou 2 degraus. Quantas maneiras diferentes existem de subir a escada?",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "2" },
      { input: "n = 3", output: "3" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {\n  // Escreva sua solução aqui\n}\n`,
      python: `def climbStairs(n):\n    # Escreva sua solução aqui\n    pass\n`,
      java: `class Solucao {\n    public static int climbStairs(int n) {\n        // Escreva sua solução aqui\n        return 0;\n    }\n}\n`,
    },
  },

  "min-stack": {
    id: "min-stack",
    title: "Min Stack",
    difficulty: "Medium",
    category: "Stack • Design",
    description: {
      text: "Implemente uma pilha que suporte push, pop, top e obtenha o valor mínimo em O(1) tempo.",
      notes: [
        "push(x) – Adiciona elemento x",
        "pop() – Remove elemento do topo",
        "top() – Retorna topo",
        "getMin() – Retorna mínimo",
      ],
    },
    examples: [
      {
        input: [
          "MinStack",
          "push",
          "push",
          "push",
          "getMin",
          "pop",
          "top",
          "getMin",
        ],
        output: "[null,null,null,null,-3,null,0,-2]",
      },
    ],
    constraints: ["Até 3*10⁴ operações serão feitas", "-2³¹ ≤ x ≤ 2³¹-1"],
    starterCode: {
      javascript: `class MinStack {\n  constructor() {\n    // Inicialize sua estrutura\n  }\n}\n`,
      python: `class MinStack:\n    def __init__(self):\n        # Inicialize sua estrutura\n        pass\n`,
      java: `class MinStack {\n    public MinStack() {\n        // Inicialize sua estrutura\n    }\n}\n`,
    },
  },
  "serialize-and-deserialize-binary-tree": {
    id: "serialize-and-deserialize-binary-tree",
    title: "Serializar e Desserializar Árvore Binária",
    difficulty: "Hard",
    category: "Árvore • DFS • BFS",
    description: {
      text: "Implemente métodos para serializar uma árvore binária em string e desserializar de volta para árvore.",
      notes: [
        "Você deve poder reconstruir a árvore original a partir da string.",
      ],
    },
    examples: [
      {
        input: "root = [1,2,3,null,null,4,5]",
        output: "[1,2,3,null,null,4,5]",
      },
    ],
    constraints: ["Número de nós ≤ 10⁴", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `function serialize(root) {\n  // Serializa a árvore\n}\nfunction deserialize(data) {\n  // Desserializa a string\n}\n`,
      python: `def serialize(root):\n    # Serializa a árvore\n    pass\ndef deserialize(data):\n    # Desserializa a string\n    pass\n`,
      java: `class Codec {\n    public String serialize(TreeNode root) {\n        // Serializa a árvore\n        return \"\";\n    }\n    public TreeNode deserialize(String data) {\n        // Desserializa a string\n        return null;\n    }\n}\n`,
    },
  },

  "lfu-cache": {
    id: "lfu-cache",
    title: "LFU Cache",
    difficulty: "Hard",
    category: "Design • Hash Table • Doubly Linked List",
    description: {
      text: "Implemente um LFU (Least Frequently Used) Cache que suporte get e put em O(1).",
      notes: ["Se houver empate na frequência, remova o item mais antigo."],
    },
    examples: [
      {
        input: [
          "LFUCache",
          "put",
          "put",
          "get",
          "put",
          "get",
          "get",
          "put",
          "get",
          "get",
          "get",
        ],
        output: "[null,null,null,1,null,-1,3,null,-1,3,4]",
      },
    ],
    constraints: ["0 ≤ chave, valor ≤ 10⁵", "Máximo de 10⁵ operações"],
    starterCode: {
      javascript: `class LFUCache {\n  constructor(capacity) {\n    // Inicialize a estrutura\n  }\n}\n`,
      python: `class LFUCache:\n    def __init__(self, capacity):\n        # Inicialize a estrutura\n        pass\n`,
      java: `class LFUCache {\n    public LFUCache(int capacity) {\n        // Inicialize a estrutura\n    }\n}\n`,
    },
  },

  "word-ladder": {
    id: "word-ladder",
    title: "Escada de Palavras",
    difficulty: "Hard",
    category: "Grafo • BFS",
    description: {
      text: "Dado um início e fim de palavra e um dicionário, encontre o menor número de transformações para mudar a palavra inicial na final, alterando uma letra por vez e sempre formando uma palavra válida do dicionário.",
      notes: ["Cada transformação altera apenas uma letra."],
    },
    examples: [
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
      },
    ],
    constraints: [
      "1 ≤ wordList.length ≤ 5000",
      "Todas as palavras têm mesmo tamanho",
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {\n  // Escreva sua solução\n}\n`,
      python: `def ladderLength(beginWord, endWord, wordList):\n    # Escreva sua solução\n    pass\n`,
      java: `class Solucao {\n    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Escreva sua solução\n        return 0;\n    }\n}\n`,
    },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Mesclar K Listas Ligadas Ordenadas",
    difficulty: "Hard",
    category: "Linked List • Heap",
    description: {
      text: "Dada uma lista de k listas ligadas ordenadas, mescle todas em uma única lista ordenada.",
      notes: ["Use heap ou abordagem divide and conquer para eficiência."],
    },
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
    ],
    constraints: [
      "0 ≤ k ≤ 10⁴",
      "0 ≤ Node.val ≤ 10⁴",
      "Soma do número de nós ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function mergeKLists(lists) {\n  // Escreva sua solução\n}\n`,
      python: `def mergeKLists(lists):\n    # Escreva sua solução\n    pass\n`,
      java: `class Solucao {\n    public static ListNode mergeKLists(ListNode[] lists) {\n        // Escreva sua solução\n        return null;\n    }\n}\n`,
    },
  },

  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Correspondência de Expressão Regular",
    difficulty: "Hard",
    category: "String • DP • Recursão",
    description: {
      text: "Implemente correspondência de regex com '.' e '*'. Dado s e p, determine se s corresponde ao padrão p.",
      notes: [
        "'.' corresponde a qualquer caractere único",
        "'*' corresponde a zero ou mais do caractere anterior",
      ],
    },
    examples: [
      { input: 's = "aa", p = "a*"', output: "true" },
      { input: 's = "mississippi", p = "mis*is*p*."', output: "false" },
    ],
    constraints: [
      "0 ≤ s.length, p.length ≤ 20",
      "s contém apenas letras minúsculas",
      "p contém apenas letras minúsculas, '.' ou '*'",
    ],
    starterCode: {
      javascript: `function isMatch(s, p) {\n  // Escreva sua solução\n}\n`,
      python: `def isMatch(s, p):\n    # Escreva sua solução\n    pass\n`,
      java: `class Solucao {\n    public static boolean isMatch(String s, String p) {\n        // Escreva sua solução\n        return false;\n    }\n}\n`,
    },
  },
  "binary-tree-maximum-path-sum": {
    id: "binary-tree-maximum-path-sum",
    title: "Soma Máxima de Caminho em Árvore Binária",
    difficulty: "Hard",
    category: "Árvore • DFS • Recursão",
    description: {
      text: "Dada uma árvore binária, encontre a soma máxima de qualquer caminho. Um caminho pode começar e terminar em qualquer nó.",
      notes: [],
    },
    examples: [
      { input: "root = [1,2,3]", output: "6" },
      { input: "root = [-10,9,20,null,null,15,7]", output: "42" },
    ],
    constraints: ["Número de nós ≤ 3*10⁴", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `function maxPathSum(root) {\n  // Escreva sua solução\n}\n`,
      python: `def maxPathSum(root):\n    # Escreva sua solução\n    pass\n`,
      java: `class Solucao {\n    public static int maxPathSum(TreeNode root) {\n        // Escreva sua solução\n        return 0;\n    }\n}\n`,
    },
  },

  "trie-implement": {
    id: "trie-implement",
    title: "Implementar Trie (Prefix Tree)",
    difficulty: "Hard",
    category: "Design • Trie",
    description: {
      text: "Implemente uma Trie com insert, search e startsWith.",
      notes: [],
    },
    examples: [
      {
        input: ["Trie", "insert", "search", "search", "startsWith"],
        output: "[null,null,true,false,true]",
      },
    ],
    constraints: [
      "Todas as palavras contêm apenas letras minúsculas",
      "Número de chamadas ≤ 3*10⁴",
    ],
    starterCode: {
      javascript: `class Trie {\n  constructor() {\n    // Inicialize\n  }\n}\n`,
      python: `class Trie:\n    def __init__(self):\n        # Inicialize\n        pass\n`,
      java: `class Trie {\n    public Trie() {\n        // Inicialize\n    }\n}\n`,
    },
  },

  "word-search-ii": {
    id: "word-search-ii",
    title: "Busca de Palavras II",
    difficulty: "Hard",
    category: "Matrix • Backtracking • Trie",
    description: {
      text: "Dada uma grade de caracteres e uma lista de palavras, encontre todas as palavras que existem na grade. Uma palavra pode ser formada conectando letras adjacentes horizontal ou verticalmente.",
      notes: [],
    },
    examples: [
      {
        input:
          'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
        output: '["eat","oath"]',
      },
    ],
    constraints: [
      "1 ≤ board.length, board[0].length ≤ 12",
      "1 ≤ words.length ≤ 3*10⁴",
      "1 ≤ words[i].length ≤ 10",
    ],
    starterCode: {
      javascript: `function findWords(board, words) {\n  // Escreva sua solução\n}\n`,
      python: `def findWords(board, words):\n    # Escreva sua solução\n    pass\n`,
      java: `class Solucao {\n    public List<String> findWords(char[][] board, String[] words) {\n        // Escreva sua solução\n        return new ArrayList<>();\n    }\n}\n`,
    },
  },

  "minimum-cost-to-connect-sticks": {
    id: "minimum-cost-to-connect-sticks",
    title: "Custo Mínimo para Conectar Varetas",
    difficulty: "Hard",
    category: "Heap • Greedy",
    description: {
      text: "Dadas várias varetas com comprimentos, conecte todas em uma só. Cada conexão custa a soma dos comprimentos conectados. Retorne o custo mínimo total.",
      notes: ["Problema clássico de heap/greedy."],
    },
    examples: [
      { input: "sticks = [2,4,3]", output: "14" },
      { input: "sticks = [1,8,3,5]", output: "30" },
    ],
    constraints: ["1 ≤ sticks.length ≤ 10⁴", "1 ≤ sticks[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function connectSticks(sticks) {\n  // Escreva sua solução\n}\n`,
      python: `def connectSticks(sticks):\n    # Escreva sua solução\n    pass\n`,
      java: `class Solucao {\n    public static int connectSticks(int[] sticks) {\n        // Escreva sua solução\n        return 0;\n    }\n}\n`,
    },
  },

  "alien-dictionary": {
    id: "alien-dictionary",
    title: "Dicionário Alienígena",
    difficulty: "Hard",
    category: "Grafo • Topological Sort",
    description: {
      text: "Dada uma lista de palavras de um idioma alienígena ordenadas lexicograficamente, determine a ordem dos caracteres neste idioma.",
      notes: ["Retorne uma string representando a ordem ou '' se impossível."],
    },
    examples: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"' },
      { input: 'words = ["z","x"]', output: '"zx"' },
    ],
    constraints: ["1 ≤ words.length ≤ 100", "1 ≤ words[i].length ≤ 100"],
    starterCode: {
      javascript: `function alienOrder(words) {\n  // Escreva sua solução\n}\n`,
      python: `def alienOrder(words):\n    # Escreva sua solução\n    pass\n`,
      java: `class Solucao {\n    public String alienOrder(String[] words) {\n        // Escreva sua solução\n        return \"\";\n    }\n}\n`,
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
