import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Header,
  Message,
  Segment,
  Divider,
  Icon,
} from "semantic-ui-react";

export default function Part(props) {
  const [prtnum, set_prtnum] = useState("RAM001");
  const [descripion, set_descripion] = useState("SSD RAM 1333 Mhz");
  const [comcde, set_comcde] = useState("RAM");
  const [onhand, set_onhand] = useState(0);
  const [formErrors, set_formErrors] = useState({});

  const isLoading = useSelector((state) => state.ui.is_loading);
  const error = useSelector((state) => state.ui.error);
  const disp_msg = useSelector((state) => state.ui.msg);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!prtnum) errors.prtnum = "Bu alanı doldurunuz";
    else if (!descripion) errors.descripion = "Bu alanı doldurunuz";

    set_formErrors(errors);

    if (Object.entries(errors).length !== 0) {
      return;
    }
    console.log();
  };

  return (
    <Container text>
      <Divider hidden />
      <Message
        attached
        header="Ürun Tanımlama"
        content="Yeni kalem ekleyebilir ve/veya güncelleme yapabilirsiniz!"
      />
      <Segment attached>
        <Form error={error} onSubmit={handleSubmit}>
          <Message error header="Hata Oluştu!" content={disp_msg} />
          <Form.Input
            required
            placeholder="Ürün Kodu"
            name="prtnum"
            value={prtnum}
            label="Ürün Kodu"
            error={formErrors.prtnum}
            onChange={(e) => set_prtnum(e.target.value)}
          />
          <Form.Input
            required
            placeholder="Ürün Açıklaması"
            name="descripion"
            value={descripion}
            error={formErrors.descripion}
            label="Ürün Açıklaması"
            onChange={(e) => set_descripion(e.target.value)}
          />
          <Form.Input
            required
            min={0}
            step={0.1}
            placeholder="Stok Miktarı"
            name="onhand"
            value={onhand}
            label="Stok Miktarı"
            onChange={(e) => set_onhand(e.target.value)}
          />
          <Button
            type="submit"
            disabled={prtnum === "" || descripion === ""}
            loading={isLoading}
            primary
          >
            <Icon disabled name="save" />
            Kaydet
          </Button>
          <Button
            type="button"
            onClick={() => props.history.goBack()}
            color="red"
          >
            <Icon disabled name="sign out alternate" />
            Kapat
          </Button>
        </Form>
      </Segment>
    </Container>
  );
}
