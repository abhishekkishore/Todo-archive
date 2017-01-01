class AddProjectsForeignKeyToTasks < ActiveRecord::Migration[5.0]
  def change
    change_table :tasks do |t|
      t.integer :project_id
      add_foreign_key :tasks, :projects
    end
  end
end
