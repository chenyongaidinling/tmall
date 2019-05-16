<!-- 渲染猜你喜欢模块 -->
<?php
    include "conn.php";
    $result=mysql_query("select * from pic_list");
    $arr=array();
    for($i=0;$i<mysql_num_rows($result);$i++){
        $arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
    }

    echo json_encode($arr);
?>