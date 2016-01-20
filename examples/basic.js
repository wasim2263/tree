import 'rc-tree/assets/index.less';
import 'rc-tree/assets/demo-basic.less';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Tree, {TreeNode} from 'rc-tree';

const Demo = React.createClass({
  propTypes: {
    keys: PropTypes.array,
  },
  getDefaultProps() {
    return {
      keys: ['0-0-0-0', '0-0-1'],
    };
  },
  getInitialState() {
    const keys = this.props.keys;
    return {
      defaultExpandedKeys: keys,
      defaultSelectedKeys: keys,
      defaultCheckedKeys: keys,
      switchIt: true,
    };
  },
  onExpand(treeNode, expand, expandedKeys) {
    console.log('onExpand', expand, expandedKeys);
  },
  onSelect(info) {
    console.log('selected', info);
  },
  onCheck(info) {
    console.log('onCheck', info);
  },
  onEdit(e) {
    console.log('edit', this);
    e.stopPropagation();
  },
  onDel(e) {
    if (!window.confirm('sure to delete?')) {
      return;
    }
    e.stopPropagation();
  },
  render() {
    const customLabel = (<span className="cus-label">
      <span>operations: </span>
      <span style={{color: 'blue'}} onClick={this.onEdit}>Edit</span>&nbsp;
      <span style={{color: 'red'}} onClick={this.onDel}>Delete</span>
    </span>);
    return (<div style={{margin: '0 20px'}}>
      <h2>simple</h2>
      <Tree className="myCls" showLine multiple checkable
          defaultExpandedKeys={this.state.defaultExpandedKeys}
          onExpand={this.onExpand}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultCheckedKeys={this.state.defaultCheckedKeys}
          onSelect={this.onSelect} onCheck={this.onCheck}>
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title={customLabel} key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1" disabled>
            <TreeNode title="parent 1-1-0" key="0-0-1-0" disableCheckbox />
            <TreeNode title="parent 1-1-1" key="0-0-1-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
