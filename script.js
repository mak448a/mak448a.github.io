// new TypeIt("#description", {
//   strings: "I like programming in Python.",
//   speed: 75,
//   loop: true,
// }).go();

new TypeIt("#description", {
    speed: 50,
    startDelay: 200,
    loop: true
})
.type("I like programming.")
.pause(2000)
.delete(19)
.type("I like to use Linux.")
.pause(2000)
.go()