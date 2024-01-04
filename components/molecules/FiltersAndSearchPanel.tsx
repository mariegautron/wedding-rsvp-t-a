import { Button, Checkbox, Col, Input, Row, Space } from "antd";

interface FiltersAndSearchProps {
  showOnlyNotResponded: boolean;
  setShowOnlyNotResponded: (showOnlyNotResponded: boolean) => void;
  showOnlyPresent: boolean;
  setShowOnlyPresent: (showOnlyPresent: boolean) => void;
  showOnlyOneCanCome: boolean;
  setShowOnlyOneCanCome: (showOnlyOneCanCome: boolean) => void;
  setSearchName: (value: string) => void;
  resetFilters: () => void;
  showOnlyInvitNotSent: boolean;
  setShowOnlyInvitNotSent: (showOnlyInvitNotSent: boolean) => void;
  showOnlyInvitSent: boolean;
  setShowOnlyInvitSent: (showOnlyInvitSent: boolean) => void;
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
  showOnlyInvitNotSent,
  setShowOnlyInvitNotSent,
  showOnlyInvitSent,
  setShowOnlyInvitSent,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Row
        justify="space-between"
        align="middle"
        gutter={[8, 8]}
        style={{ marginBottom: 20 }}
      >
        <Col span={4}>
          <Checkbox
            style={{ width: "100%" }}
            checked={showOnlyNotResponded}
            onChange={(e) => setShowOnlyNotResponded(e.target.checked)}
          >
            Pas encore répondu
          </Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox
            style={{ width: "100%" }}
            checked={showOnlyPresent}
            onChange={(e) => setShowOnlyPresent(e.target.checked)}
          >
            Répondu - Viennent
          </Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox
            style={{ width: "100%" }}
            checked={showOnlyOneCanCome}
            onChange={(e) => setShowOnlyOneCanCome(e.target.checked)}
          >
            Peuvent venir avec quelqu'un
          </Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox
            style={{ width: "100%" }}
            checked={showOnlyInvitNotSent}
            onChange={(e) => setShowOnlyInvitNotSent(e.target.checked)}
          >
            Invitations non envoyées
          </Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox
            style={{ width: "100%" }}
            checked={showOnlyInvitSent}
            onChange={(e) => setShowOnlyInvitSent(e.target.checked)}
          >
            Invitations envoyées
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
