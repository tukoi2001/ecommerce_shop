<template>
  <div class="wrapper">
    <h2 class="order__title">
        Đơn hàng
    </h2>

    <table class="table table-bordered text-center">
        <thead class="thead-light">
            <tr>
                <th>Đơn hàng</th>
                <th>Ngày</th>
                <th>Tình trạng</th>
                <th>Tổng tiền</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Aug 22, 2018</td>
                <td>Pending</td>
                <td>$3000</td>
                <td>
                    <a href="#" class="btn btn btn-color btn-hover-primary btn-sm">Xem</a>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Aug 22, 2018</td>
                <td>Pending</td>
                <td>$3000</td>
                <td>
                    <a href="#" class="btn btn btn-color btn-hover-primary btn-sm">Xem</a>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Aug 22, 2018</td>
                <td>Pending</td>
                <td>$3000</td> 
                <td>
                    <a href="#" class="btn btn btn-color btn-hover-primary btn-sm">Xem</a>
                </td>             
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'Order',
}
</script>

<style scoped src="@/assets/css/components/me/order.css">

</style>