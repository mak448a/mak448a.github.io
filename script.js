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
.type("I like programming in Python.")
.pause(2000)
.delete(29)
.type("I like to use Solus Linux.")
.pause(2000)
.delete(29)
.go()