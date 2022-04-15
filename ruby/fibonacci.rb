def fibonacci(num)
  array = []
  repeat = num + 1
  repeat.times do |i|
    array[-1] ? element1 = array[-1] : element1 = 0
    array[-2] ? element2 = array[-2] : element2 = 0
    sum = element1 + element2
    i == 1 ? array << 1 : array << sum
  end
  array[-1]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
