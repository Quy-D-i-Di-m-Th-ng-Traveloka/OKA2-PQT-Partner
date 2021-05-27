import { React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "./NavBar.css";
import images from "../../images/importImages";

const HomePartner = (props) => {
  return (
    <>
      <div className="bodypartner">
        <Container className="container">
          <Row>
            <Col>
              <h2>
                <strong>
                  Chúng tôi giúp bạn vận hành doanh nghiệp dễ dàng hơn
                </strong>
              </h2>
              <br></br>
              <p>
                Bằng nhiều phòng hơn với hệ thống kinh doanh tích hợp cũa chúng
                tôi , và tận hưởng nhiều quyền lợi của đối tác
              </p>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col>
              <img src={images.quanlykenh} width="30%" className="img1" />
              <h4>
                <strong>Quản lý kênh</strong>
              </h4>
              <p>
                Chúng tôi kết nối bạn với nhiều quản lý kênh để tránh đặt chỗ
                trùng. Dễ dàng quản lý phòng trống và giá phòng ở các OTA khác
                nhau mà bạn tham gia.
              </p>
            </Col>
            <Col>
              <img src={images.hotroQLTT} width="30%" className="img1" />
              <h4>
                <strong>Hỗ trợ từ Quản lý Thị trường</strong>
              </h4>
              <p>
                Đội ngũ Quản lý Thị trường của chúng tôi luôn sẵn sàng hướng dẫn
                và giúp mở rộng doanh nghiệp của bạn.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <img src={images.thanhtoan} width="30%" className="img1" />
              <h4>
                <strong>Thanh toán tiện lợi</strong>
              </h4>
              <p>
                Hình thức thanh toán linh hoạt phù hợp với nhu cầu của bạn. Bạn
                muốn dùng VCC, chuyển khoản ngân hàng, hàng tháng hay hàng tuần;
                chúng tôi đều có lựa chọn hợp lý dành cho bạn.
              </p>
            </Col>
            <Col>
              <img src={images.hotroKS} width="30%" className="img1" />
              <h4>
                <strong>Hỗ trợ từ đội Hỗ trợ Khách sạn</strong>
              </h4>
              <p>
                Với sự giúp đỡ 24/7 của đội ngũ Hỗ trợ Khách sạn, chúng tôi luôn
                sẵn sàng khi bạn cần.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <img src={images.dedangsudung} width="30%" className="img1" />
              <h4>
                <strong>Dễ dàng sử dụng</strong>
              </h4>
              <p>
                Chúng tôi thiết kế TERA như là một nền tảng “một cửa”, tích hợp
                mọi tính năng bạn cần để quản lý nơi nghỉ của mình.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <h2 className="center">
          <strong>Chúng tôi chào đón tất cả các loại hình lưu trú</strong>
        </h2>
      </div>

      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={images.KS}
            alt="First slide"
            width="10%"
          />
          <Carousel.Caption className="caption">
            <h3>
              <stron>Khách Sạn</stron>
            </h3>
            <p>
              Nơi lưu trú mang tính chất thương mại , có cung cấp phòng riêng ,
              bao gồm bữa ăn và các dịch vụ cho khách .
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={images.KSBD} alt="Second slide" />
          <Carousel.Caption className="caption">
            <h3>
              <strong>Khách sạn bình dân</strong>
            </h3>
            <p>
              Nơi lưu trú với ngân sách tiết kiệm , cung cấp chỗ ở căn bản ,
              thường là các giường kiểu ký túc xá .{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={images.bietthu}
            alt="Third slide"
          />
          <Carousel.Caption className="caption">
            <h3>
              <strong>Biệt thự</strong>
            </h3>
            <p>
              Một ngôi nhà lớn , thường nằm ở ngoại ô hoặc các địa điểm danh lam
              thắng cảnh . Đây có thể là một ngôi nhà độc lập hoặc thuộc một khu
              phức hợp gốm nhiều ngôi nhà .
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={images.khunghiduong}
            alt="Fourth slide"
          />
          <Carousel.Caption className="caption">
            <h3>
              <strong>Khu nghỉ dưỡng</strong>
            </h3>
            <p>
              Khu phức hợp gồm nhiều khu lưu trú có cung cấp phòng riêng và
              nhiều phương tiện , hoạt động giải trí .
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="div-indo">
        <img src={images.indo} className="indo" width="150px" />
        <h5>
          Sau khi làm đối tác với Traveloka , chúng tôi thấy doanh thu tăng đột
          biến. Các Quản lý thị trường luôn thân thiện và chủ động mang đến các
          khuyến mãi để tăng thêm doanh thu cho chúng tôi.
        </h5>
        <p>
          - Andhina Anggun Quản lý Khách sạn , Grand Edge Hotel Semarang,
          Indonesia
        </p>
      </div>
      <br></br>
      <div className="tera">
        <Container className="container1">
          <Row>
            <Col>
              <h2>
                <strong>Hệ thống Đặt chỗ Extranet của Traveloka (TERA)</strong>
              </h2>
              <br></br>
              <p>
                TERA là hệ thống giúp bạn quản lý phòng trống và giá phòng trên
                Traveloka.
              </p>
            </Col>
            <Col>
              <img src={images.lamviec} width="30%" className="img1" />
              <h4>
                <strong>Làm việc mọi lúc mọi nơi</strong>
              </h4>
              <p>
                Bạn có thể truy cập vào TERA trên máy tính và ứng dụng di động.
                Quản lý nơi nghỉ nay thật đơn giản dù bạn đang không ở văn
                phòng.
              </p>
            </Col>
          </Row>

          <Row>
            <Col></Col>
            <Col>
              <img src={images.quanlydatcho} width="30%" className="img1" />
              <h4>
                <strong>Quản lý đặt chỗ dễ dàng</strong>
              </h4>
              <p>
                Nhận thông báo thời gian thực với mọi đặt chỗ (kể cả yêu cầu đặc
                biệt của khách). Quản lý đặt chỗ chưa bao giờ dễ dàng hơn thế.
              </p>
            </Col>
          </Row>

          <Row>
            <Col></Col>
            <Col>
              <img src={images.KSP} width="30%" className="img1" />
              <h4>
                <strong>Kiểm soát phòng trống và giá phòng</strong>
              </h4>
              <p>
                Chỉ cần vài cú nhấp chuột, bạn đã có thể toàn quyền kiểm soát
                cách thức bán phòng trên Traveloka.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="div-QLTT">
        <h5>
          <img src={images.QLTT} className="QLTT" width="200px" />
          Quản lý thị trường của Traveloka rất dễ nói chuyện và gặp gỡ. Tôi chưa
          bao giờ gặp phải vấn đề trong thanh toán.
          <p className="p">
            <i>
              - Ms. Pearly Chong, Chủ khách sạn, New Boutique Hotel, Malaysia
            </i>
          </p>
        </h5>
      </div>

      <div className="detail">
        <Container className="container1">
          <Row>
            <Col>
              <div className="details">
                <details>
                  <summary>
                    <strong>
                      Làm thế nào để đăng ký bán cơ sở lưu trú của bạn trên
                      Traveloka?
                    </strong>
                  </summary>
                  <p>
                    Traveloka là OTA (Đại lý du lịch trực tuyến) lớn nhất ở
                    Indonesia và Đông Nam Á. Với nhiều loại hình cơ sở lưu trú
                    được bán trên Traveloka, giờ đây việc trở thành đối tác của
                    Traveloka càng trở nên dễ dàng hơn. Dưới đây là những bước
                    để các chủ cơ sở lưu trú có thể đăng ký bán phòng và trở
                    thành đối tác của Traveloka:<br></br> + Tạo một tài khoản
                    trong Traveloka TERA <br></br> + Điền mẫu đăng ký<br></br>+
                    Quản lý thị trường của Traveloka sẽ liên hệ với chủ sở hữu
                    cơ sở để xác thực chi tiết và lấy thêm thông tin bao gồm giá
                    phòng và tình trạng phòng trống.
                  </p>
                </details>
              </div>
            </Col>
            <Col>
              <div className="details">
                <details>
                  <summary>
                    <strong>
                      Cần điều khoản và điều kiện nào để đăng bán cơ sở lưu trú
                      trên Traveloka?
                    </strong>
                  </summary>
                  <p>
                    Để đăng ký bán cơ sở lưu trú trênTraveloka, có một số giấy
                    tờ mà chủ sở hữu cần phải chuẩn bị gồm:<br></br> + Chứng
                    minh nhân dân <br></br> + Bảng cứng hồ sơ tiết kiệm{" "}
                    <br></br>+ Giấy phép kinh doanh (để đăng ký khách sạn)
                  </p>
                </details>
              </div>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <div className="details">
                <details>
                  <summary>
                    <strong>
                      Có bất kỳ khoản phí bổ sung phát sinh nào khi đăng ký bán
                      cơ sở lưu trú của bạn trên Traveloka không?
                    </strong>
                  </summary>
                  <p>
                    Traveloka không yêu cầu thêm phí khi chủ sở hữu đăng ký bán
                    phòng trên Traveloka.
                  </p>
                </details>
              </div>
            </Col>

            <Col>
              <div className="details">
                <details>
                  <summary>
                    <strong>Traveloka TERA là gì?</strong>
                  </summary>
                  <p>
                    Traveloka TERA là viết tắt của Traveloka Extranet
                    Reservation Access (Hệ thống quản lý đặt phòng bởi
                    Traveloka). Đây là một hệ thống extranet được xây dựng bởi
                    Traveloka, cho phép chủ sở hữu cơ sở lưu trú hoặc đối tác
                    quản lý cơ sở lưu trú được đăng bán. Chủ sở hữu cơ sở lưu
                    trú có thể truy cập Traveloka TERA thông qua website trên
                    máy tính và ứng dụng trên điện thoại di động. Các dịch vụ
                    được bao gồm trong Traveloka TERA gồm: <br></br> + Đăng ký
                    bán khách sạn trên Traveloka <br></br> + Đăng ký bán cơ sở
                    lưu trú trên Traveloka <br></br> + Dễ dàng quảng bá khách
                    sạn và các loại hình cơ sở lưu trú khác{" "}
                  </p>
                </details>
              </div>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <div className="details">
                <details>
                  <summary>
                    <strong>
                      Các loại cơ sở lưu trú nào có thể đăng bán trên Traveloka?
                    </strong>
                  </summary>
                  <p>
                    Hiện tại, Traveloka đang hợp tác với nhiều chủ sở hữu cơ sở
                    lưu trú. Các loại hình cơ sở lưu trú được hỗ trợ trên
                    Traveloka gồm: <br></br> + Khách sạn <br></br> + Khách sạn
                    bình dân <br></br> + Nhà riêng <br></br> + Homestay{" "}
                    <br></br> + Nhà khách <br></br> + Biệt thự <br></br> + Căn
                    hộ
                  </p>
                </details>
              </div>
            </Col>

            <Col>
              <div className="details">
                <details>
                  <summary>
                    <strong>Làm thế nào để truy cập Traveloka TERA?</strong>
                  </summary>
                  <p>
                    Đối tác của Traveloka có thể truy cập Traveloka TERA thông
                    qua website trên máy tính và ứng dụng trên điện thoại di
                    động để đăng ký bán phòng khách sạn hoặc quảng bá cơ sở lưu
                    trú của mình. Hãy tải ứng dụng Traveloka mới nhất miễn phí
                    trên App Store (dành cho người dùng iOS) hoặc Play Store
                    (dành cho người dùng Android).
                  </p>
                </details>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomePartner;
