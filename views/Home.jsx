const React = require('react');


// eslint-disable-next-line no-undef
module.exports = function Home() {
  return (
<div>
      <form action="/login" method="post" >
        <div>
          <label>Mail</label>
          <input name="name" type="name" />
        </div>
        <div>
          <label >Password</label>
          <input name="pass"type="name" />
        </div>

        <button >Login</button>
      </form>
      </div>
  );
};
