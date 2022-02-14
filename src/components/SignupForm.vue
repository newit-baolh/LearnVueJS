<template>
  <form action="">
      <label>Email</label>
      <input type="email" required placeholder="Please input your email ..." v-model="email">

      <label>Password</label>
      <input type="password" required placeholder="Please input your password" v-model="password">

      <label>Role:</label>
      <select v-model="role" >
          <option value="develop">Web Develop</option>
          <option value="internet">Internet</option>
      </select>

      <div class="term">
          <input type="checkbox" required v-model="terms">
          <label>ACCEPT TERMS AND CONDITIONS</label>
      </div>
      
  </form>
  <p>Email: {{email}}</p>
  <p>Password: {{password}}</p>
  <p>Role: {{role}}</p>
  <p>Terms accept: {{terms}}</p>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: '',
            role: 'develop',
            terms: false,
        }
    }
}
</script>

<style>
    form{
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label{
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input,select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
</style>