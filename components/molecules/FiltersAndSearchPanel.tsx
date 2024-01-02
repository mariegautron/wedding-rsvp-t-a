import { Button, Checkbox, Col, Input, Row, Space } from "antd";

interface FiltersAndSearchProps {
  showOnlyNotResponded: boolean;
  setShowOnlyNotResponded: (value: boolean) => void;
  showOnlyPresent: boolean;
  setShowOnlyPresent: (value: boolean) => void;
  showOnlyOneCanCome: boolean;
  setShowOnlyOneCanCome: (value: boolean) => void;
  setSearchName: (value: string) => void;
  resetFilters: () => void;
}

const FiltersAndSearchPanel: React.FC<FiltersAndSearchProps> = ({
  showOnlyNotResponded,
  setShowOnlyNotResponded,
  showOnlyPresent,
  setShowOnlyPresent,
  showOnlyOneCanCome,
  setShowOnlyOneCanCome,
  setSearchName,
  resetFilters,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Row
        justify="space-between"
        align="middle"
        gutter={[8, 8]}
        style={{ marginBottom: 20 }}
      >
        <Col span={8}>
          <Checkbox
            style={{ width: "100%" }}
            checked={showOnlyNotResponded}
            onChange={(e) => setShowOnlyNotResponded(e.target.checked)}
          >
            Pas encore répondu
          </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox
            style={{ width: "100%" }}
            checked={showOnlyPresent}
            onChange={(e) => setShowOnlyPresent(e.target.checked)}
          >
            Répondu - Viennent
          </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox
            style={{ width: "100%" }}
            checked={showOnlyOneCanCome}
            onChange={(e) => setShowOnlyOneCanCome(e.target.checked)}
          >
            Peuvent venir avec quelqu'un
          </Checkbox>
        </Col>
      </Row>
      <Row justify="space-between" align="middle" gutter={[8, 8]}>
        <Col span={18}>
          <Input.Search
            style={{ width: "100%", marginBottom: "8px" }}
            placeholder="Rechercher"
            allowClear
            enterButton
            onSearch={(value) => setSearchName(value)}
          />
        </Col>
        <Col span={6}>
          <Button
            style={{ width: "100%", marginBottom: "8px" }}
            type="default"
            onClick={resetFilters}
          >
            Réinitialiser les filtres
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FiltersAndSearchPanel;
