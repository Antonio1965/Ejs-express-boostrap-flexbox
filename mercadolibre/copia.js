<body>
	<!-- Header -->
	<%- include('partials/headerNavbar') %>
      
  <div class="container products-wrapper">
    <div class="row">
      <div class="col-12">
        <h3>Registrate ahora</h3>
        <p>Completa tu email y tu contraseña para registrarte.</p>

      </div>
    </div>
    <div class="col-6">
      <form action="" method="post" enctype="multipart/form-data">
        <div class="row product-detail">
          <div class="col-12 col-md-12">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="text" value="<%= (typeof old != 'undefined' && !errors.email) ? old.email : '' %>" name="email" class="form-input" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small class="text-danger"><%= (typeof errors != 'undefined' && errors.email) ? errors.email.msg : '' %></small>
          </div>

          
          <div class="col-12 col-md-12">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" value="" name="password" class="form-input" id="exampleInputPassword1">
            <small class="text-danger"><%= (typeof errors != 'undefined' && errors.password) ? errors.password.msg : '' %></small>  
          </div>					
 
          <div class="col-12 col-md-12">
            <label for="exampleInput-RePassword1" class="form-label">Password</label>
            <input type="password" value="" name="repassword" class="form-input" id="exampleInput-RePassword1">
            <small class="text-danger"><%= (typeof errors != 'undefined' && errors.password) ? errors.password.msg : '' %></small>  
          </div>			  


          <div class="col-12">
            <button type="submit" class="buy-now-button">Registrame</button>
          </div>

        </div>
      </form>
    </div>

  </div>