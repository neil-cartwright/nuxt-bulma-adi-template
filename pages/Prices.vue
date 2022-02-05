<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="content">
            <h1 class="title is-size-6">Prices and packages</h1>
            <p>
              This is where you post your up to date prices and packages
              information. At any time, if you want to post a special offer or
              update your price list, call up and I'll update it for you. You
              can update your site content three times per month.
            </p>
          </div>
        </div>
        <div class="column is-6">
          <div class="box">
            <h1 class="title is-size-6">Example prices and packages 2022</h1>
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>1 hour</th>
                  <th>2 hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9am - 5pm</td>
                  <td>&pound;40</td>
                  <td>&pound;75</td>
                </tr>
                <tr>
                  <td>Sundays</td>
                  <td>&pound;45</td>
                  <td>&pound;80</td>
                </tr>
              </tbody>
            </table>

            <hr />

            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Packages</th>
                  <th>5 hours</th>
                  <th>10 hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9am - 5pm</td>
                  <td>&pound;190</td>
                  <td>&pound;350</td>
                </tr>
                <tr>
                  <td>Sundays</td>
                  <td>&pound;210</td>
                  <td>&pound;380</td>
                </tr>
              </tbody>
            </table>

            <hr />

            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Driving Test Hire</th>
                  <th>Fee</th>
                  <th>Short notice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Within 5 miles</td>
                  <td>&pound;100</td>
                  <td>&pound;300</td>
                </tr>
                <tr>
                  <td>More than 5 miles</td>
                  <td>Negotiable</td>
                  <td>Negotiable</td>
                </tr>
              </tbody>
            </table>

            <hr />

            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Specials</th>
                  <th>Price</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Motorway lesson</td>
                  <td>&pound;100</td>
                  <td>Minimum 1 hour 30 mins</td>
                </tr>
                <tr>
                  <td>Pass Plus</td>
                  <td>&pound;220</td>
                  <td>Minimum 6 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>
<style lang="scss" scoped>
table.table {
  text-align: left !important;
}
table.table tr td:first-child {
  width: 40%;
}
</style>
