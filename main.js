const Node = (value) => {
  return {
    
    value,
    next:null,
  }
}

const Lil = () => {
  return {
    head: null,
    
    

    values: function() {
      let arr = []
      let  current = this.head
      while(current !== null){
        arr.push(current.value)
        // console.log(arr)
        current = current.next
        
      }

      // console.log(current);

      return arr
     
    

     
    },

      
      
      


    addToStart: function(value) {
      let obj = Node(value)
      let current = this.head
      if(this.head === null){
        this.head = obj


      }else if (this.head !== null){
          this.head = obj
          obj.next = current

      }

      
        
  },

    addToEnd: function(value) {
      let obj = Node(value)
      if(!this.head){
        this.head = obj
      }else if(this.head){
        let current = this.head
        while(current.next){
          current = current.next
        }
        current.next = obj
      }
        
          return this
    },

    removeFromStart: function() {
      let current = this.head
      

      
        this.head = current.next
        
        
        // console.log(this.head)
      
      

      

      return current.value

    
    },

    removeFromEnd: function() {
      let current = this.head

      while(current.next){
        current = current.next
        
        
      }

      let last = current.value
      current = ''
      
      
      return last

      
      
    },

    getAt: function(i) {
      

      
    
    },

    removeAt: function(i) {

    
    },
  }
}


module.exports = {
  Lil,
  Node,
}