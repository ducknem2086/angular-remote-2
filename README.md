## ôn tập kiến thức angular 
# kiến trúc keycloak:
- từ màn hình layout:
  - chứa biến user account, nếu biến này chưa có giá trị
    - -> gọi vào hàm check token -> 401 
      -   biến này check nếu không có token ( trường hợp đăng nhập lần đầu)
        - -> trả về url login keycloak, trong đó chứa link redirect là snapshot của 
          route fe hiện tại
        - Từ url keycloak login -> trả về url keycloak intro spec chứa url redirect 
        - sau đó be sẽ access redirect này 
        - lúc này browser sẽ được điều hướng đến url này - và nó là url của con fe
        - thì ở file layout chạy hàm get authen để check keycloak session theo ip
        - -> có user đã đăng nhập -> trả về token và lưu vào localStorage 
        - sau đó có token -> gọi tiếp api get user info để lấy ra thông tin của user
          - bao gồm : quyền, tên, mail, tên đơn vị, loại account 
          (trong đó quyền là từ keycloak, còn các thông tin còn lại thì lấy từ bên khác,
           và các thông tin user này thì lưu vào biến userAccount của fe)
        - -> trường hợp token hết hạn 
          - thông qua hàm check token (cái này config thành guard để ở route tổng)
            thì tự đẩy về trang login
          - 
# Kiến thức về change detection:
- với virtual scroll : nó cũng giống như phân trang, gồm: 
  - limit là số bản ghi, offset là trang
  
# Angular change detection:
  - với ngZone:
    - đại khái như sau: khi 1 biến state được thay đổi, nó cần gửi tín hiệu lên ngzone,
    - sau đó ngzone sẽ check cd cho cả tree dom, từ đó dom được update
      - note: nếu thằng con có phụ thuộc biến từ thằng cha, mà biến của thằng cha được update
        - cd lúc này sẽ chạy đến cả thằng con phụ thuộc của nó
        - nếu component không muốn bị trigger cd lại, chỉ chạy cd lần đầu -> onPush
        - Nếu một event (click, input, submit…) được bind trong template của component xảy ra
        - Angular sẽ trigger change detection cho chính component đó (hoăc khi chạy cd thủ công)
  - lỗi kinh điển : ExpressionChangedAfterItHasBeenCheckedError
    - cách sửa -> cd.detectChange() hoặc markForCheck
    - với detectChange: đại khái là cập nhật force ui ngay tại lúc đó
    - và cả component con kèm theo 
    - với markForCheck() đơn giản là gửi tín hiệu lên zone để chạy lại cd thêm lần nữa,
      nếu có thay đổi thì cập nhật đến component hiện tại
  - without ngZone: singal state pattern - Zoneless change detection:
    - khi 1 biến state đươc thay đổi giá trị - cần cập nhật ui:
      - mỗi component sẽ được dịnh danh để chạy cd khi cần, lúc này khi state của component
      - cần thay đổi giá trị thì bản thân nó gọi đến hàm markAncestorsForTraversal
      - (root component - thuật toán check dom cd : DFS)
      - và lúc này component nó được đánh dấu trạng thái dirty để chạy cd
        (là chỉ dirty component của nó, không dirty các component phụ thuộc / cha)
      - thông qua các cờ HasChildViewsToRefresh được gắn cho mỗi component, angular
      - tìm node tương ứng từ commponent cần được chạy cd 
      - khi tìm dến đúng component, lúc này thấy nó đang ở trạng thái dirty -> update ui

# Cơ chế lưu trữ token: 
  - localStorage: access trên browser client  -> chỉ mất khi xóa dữ liệu browser
  - sessionStorage: lưu dược 10mb -> tắt tab đi là mất 
  - cookie: 4kb, 
    - có thời gian hết hạn , cần set httpOnly = true dể không cho phép
    - thao tác từ js

# Mô tả về viewProviders - provider
  - View của component và content children (qua ng-content)
  - Chỉ view của component (viewcomponent + view con)
#LifeCycle angular

  - constructor
  - onChanges
  - onInit
  - doCheck
  - afterContentInit
  - afterContentChecked
  - afterViewInit
  - afterViewChecked
  - onDestroy

# Debounce - throttle:
- debounce:
  - Chỉ chạy hàm sau khi sự kiện dừng trong một khoảng thời gian nhất định.
  - Nếu trong thời gian chờ mà sự kiện lại tiếp tục xảy ra, reset lại thời gian chờ.
- throttle: trong bao nhiêu giây thì chỉ có 1 request được thực hiện -> đùng cho scroll 

# DomSanitizer : truust thtml (like youtube embeded frame)

# @defer on 

- idle: triggers deferred loading once the browser has reached an idle state (detected using requestIdleCallback API) – so as soon as the browser doesn’t have any heavy lifting task. This is the default behavior.

- immediate: fetches the chunk right away during template execution.

- interaction: triggers the deferred block when user interacts with the element through the click or keydown event

- hover: triggers when the user hovers over an element, using the mouseenter and focusin browser events under the hood.

- viewport: triggers when element is visible on viewport – behind the scenes Angular uses the Intersection Observer API

timer triggers element’s fetch and display after specified amount of time

# service worker : 

Nói tóm lại service worker có các điểm sau:
- Nó là một file javascript không can thiệp trực tiếp và DOM của website, thay vào đó nó giao tiếp với các page thông quả một giao diện đặc biệt (postMessage), và tương tác với DOM thông qua các page đó.

- SW là proxy mạng có thể lập trình được, tức nó cho phép ta điều khiển cách mà các request được xử lý.

- Nó tắt khi không được dùng đến và sẽ khởi động lại khi cần đến.

- SW sự dụng rộng rãi khái niệm Promises.

- Để cài đặt sw của một trang web, ta cần đăng ký nó bằng javascript của trang web. khi đăng ký sw browser sẽ bắt đầu quá trình đăng ký sw ngầm. Trong bước cài đặt sw nếu muốn ta có thể cache các assets tĩnh, khi việc cache này được hoàn thành nghĩa là sw đã được cài đặt. Nếu các tệp không được cache thành công hoặc không được tải thành công thì sw worker sẽ không cài đặt được và sẽ không active. Sau khi cài đặt thành công sw sẽ bước qua giai đoạn active.

# web worker : 
-  giao tiếp với nhau thông qua hai hàm chính là postMessage() và onmessage().
-   Cả main thread và Worker đều nhận thông tin thông qua sự kiện onmessage() và truy cập dự liệu thông qua event.data.

