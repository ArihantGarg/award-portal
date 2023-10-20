<svelte:head>
  <!-- <meta http-equiv="refresh" content="0; url=/login" /> -->
  <title>Award Portal</title>
</svelte:head>

<div class="h1">
  <h1>Welcome to Award Portal</h1>
</div>
<div>
  <p>Available Pages:</p>
  <hr>
  <a href="/login">Login</a>
  <a href="/signup">Signup</a>
  <a href="/forgot">Forgot Password</a>
  <a href="/awardcommittee/create">Create Award Committee</a>
  <a href="/submission/create">Submission Form</a>
  <a href="/submission">Submission List</a>
  <a href="/submission/1">Submission Details</a>
  <a href="/ReviewerList" >Reviewers List</a>
  <a href="/reviewer/create">Add new Reviewer</a>
  <a href="/award/newAward">New Award</a>
  <p>
    <hr>
  
  <p>Todo Links:</p>
  <hr />
  <a href="/reset">Reset Password</a>
  <a href="/admin">Admin</a>
  <a href="/awardcommittee">Award List</a>
  <a href="/awardcommittee/1">Award Details</a>
  <br />
</div>

<style>
  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    margin-inline : auto;
  }
</style>
