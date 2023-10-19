Hướng dẫn nè:

git clone cái này về
npm install
npm run build
npm link

rồi sau đó vào project của mình
npm link @iit/sdk

là xong, kiểm tra node_modules/@iit tồn tại là thành công

\*\* Hướng dẫn dùng code

B1: kết nối kết sv local
import sdk from '@iit/sdk"

sdk.course.offline.connect('http://...') // url có sv

B2: sau đó gọi hàm (vd hàm tạo school)
const { status, data, err } = await sdk.course.offline.school.create({
code: 'h3k12j3',
name: 'first school'
})
